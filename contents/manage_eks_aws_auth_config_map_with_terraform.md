---
title: 'Manage EKS aws-auth configmap with terraform'

date: '2021-10-12'

tags: ['Kubernetes','Terraform']
---

## Introduction

Hi, everyone.
I would like to leave a memorandum about how to manage Kubernetes's configmap AWS auto-generated with terraform.


## What Trouble

- If we want to add iam user/role for eks cluster operation, we need to fix auto-generated aws-auth configmap(namespace:kube-system)
- If we follow the official manual: https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html), we should manage it with kubernetes manifest yml, but we want to manage it with terraform.
  - Because at first we can access our eks cluster only with IAM user/role used when creating cluster(with ~/.kube/config as below) and our cluster generated role is terraform user/role
  - Therefore, We want to add user/role to aws-auth configmap with terraform user/role and manage aws-auth configmap with terraform.
   
```yaml 
# ~/.kube/config
- name: arn:aws:eks:ap-northeast-1:9999999999:cluster/eks-example
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1alpha1
      args:
      - --region
      - ap-northeast-1
      - eks
      - get-token
      - --cluster-name
      - eks-example
      command: aws
      env: null
      provideClusterInfo: false
``` 

## How to resolve the trouble

### 1. Add terraform aws-auth configmap resouece and Use `terraform import` command

#### 1.0 Prepare terraform kubernetes provider

```hcl-terraform
provider "kubernetes" {
  host                   = data.aws_eks_cluster.eks.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.eks.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.eks.token
} 

```

- Caution: we should set host/token/cluster_ca_certificate to operate kubernetes cluster with tf-provider.
  - REF: https://registry.terraform.io/modules/terraform-aws-modules/eks/aws/latest

#### 1.1 Prapare aws-auth configmap tf resource for importing

```hcl-terraform
# aws-auth.tf
resource "kubernetes_config_map" "aws-auth" {
  data = {
    "mapRoles" = ""
  }

  metadata {
    name      = ""
    namespace = ""
  }
}
```

#### 1.2 Execute `terraoform import` cmd

```shell script
terraform import kubernetes_config_map.aws-auth kube-system/aws-auth
```

#### 1.3 terraform plan and remove diff from real resource state to resource config
 
```hcl-terraform
resource "kubernetes_config_map" "aws-auth" {
  data = {
    "mapRoles" = <<EOT
- rolearn: arn:aws:iam::99999999999:role/hoge-role
  username: system:node:{{EC2PrivateDNSName}}
  groups:
    - system:bootstrappers
    - system:nodes
      # Therefore, before you specify rolearn, remove the path. For example, change arn:aws:iam::<123456789012>:role/<team>/<developers>/<eks-admin> to arn:aws:iam::<123456789012>:role/<eks-admin>. FYI:https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting_iam.html#security-iam-troubleshoot-ConfigMap
EOT
  }

  metadata {
    name      = "aws-auth"
    namespace = "kube-system"
  }
}
```

### 2. Fix aws-auth configmap resource we imported and add iam user/role

```hcl-terraform
resource "kubernetes_config_map" "aws-auth" {
  data = {
    "mapRoles" = <<EOT
- rolearn: arn:aws:iam::99999999999:role/hoge-role
  username: system:node:{{EC2PrivateDNSName}}
  groups:
    - system:bootstrappers
    - system:nodes
      # Therefore, before you specify rolearn, remove the path. For example, change arn:aws:iam::<123456789012>:role/<team>/<developers>/<eks-admin> to arn:aws:iam::<123456789012>:role/<eks-admin>. FYI:https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting_iam.html#security-iam-troubleshoot-ConfigMap
# Add as below 
- rolearn: hoge
  username: hoge
  groups: # REF: https://kubernetes.io/ja/docs/reference/access-authn-authz/rbac/
    - hoge
EOT
  }

  metadata {
    name      = "aws-auth"
    namespace = "kube-system"
  }
}
```

## References
- https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html
- https://kubernetes.io/ja/docs/reference/access-authn-authz/rbac/
- https://registry.terraform.io/modules/terraform-aws-modules/eks/aws/latest
