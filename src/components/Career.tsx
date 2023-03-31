import React from 'react'

type CareerProps = {
}

const Career: React.FC<CareerProps> = ({ }) => {

    return (
        <section id="Career">
            <h2>Career</h2>
            <ul >
                <li>
                    Senior Software Engineer(Machine Learning/MLOps) at &nbsp;
                    <a href={`https://mtch.com/`}>
                        Match Group (eureka, Inc.) &nbsp;
                    </a>
                    (July, 2022〜 Present)
                    <ul >
                        <li>
                            Online Dating Service ( Number of Users Over 15 million, 3 Regions) &nbsp;
                            <a href={`https://www.pairs.lv/`}>
                                Pairs(Moderation System)
                            </a>
                            <ul>
                                <li>
                                    <a href={`https://medium.com/eureka-engineering/ml-system-monitoring-tips-f3f9671708b0`}>
                                        Enhance ML System Monitoring of the Moderation system (redefine and implement monitoring indicators) (Datadog/GCP Cloud logging/shapash/evidently)
                                    </a>
                                </li>
                                <li>Text Moderation Precision/Recall improvements (whitelist, rule-based, model improvements)</li>
                                <li>Rebuild Text Moderation ML Model and Pipeline</li>
                                <li>Standardization of data preprocessing (tokenization/parameterization) for learning and inference of Text Moderation Models (migration from Go to Python, Mecab Ipadic)</li>
                                <li>Moderation System performance improvement (endpoint latency p99 reduced to less than half)</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Senior Software Engineer(Site Reliability Engineering) at &nbsp;
                    <a href={`https://mtch.com/`}>
                        Match Group (eureka, Inc.) &nbsp;
                    </a>
                    (March, 2022〜 June, 2022)
                    <ul >
                        <li>
                            Online Dating Service ( Number of Users Over 15 million, 3 Regions) &nbsp;
                            <a href={`https://www.pairs.lv/`}>
                                Pairs
                            </a>
                            <ul>
                                <li>
                                    <a href={`https://medium.com/eureka-engineering/%E3%82%A8%E3%82%A6%E3%83%AC%E3%82%AB%E9%96%8B%E7%99%BA%E7%B5%84%E7%B9%94%E5%85%A8%E4%BD%93%E3%81%A7%E3%83%AA%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3%E3%81%A8%E5%90%91%E3%81%8D%E5%90%88%E3%81%86%E3%81%9F%E3%82%81%E3%81%AB-sre-team%E3%81%AEvision-mission-values%E3%82%92rebuild%E3%81%97%E3%81%9F%E8%A9%B1-bb47daae8290`}>
                                        Redefining MVV for the SRE Team
                                    </a>
                                </li>
                                <li>
                                    <a href={`https://medium.com/eureka-engineering/pairs-eureka-%E3%81%AEeks-production%E7%92%B0%E5%A2%83%E3%81%AE%E8%A8%AD%E8%A8%88%E3%81%A8%E9%81%8B%E7%94%A8%E3%81%AE%E3%81%8A%E8%A9%B1-74608ff640df`}>
                                        Migration of Pairs Online Server from Amazon ECS on FARGATE to Amazon EKS on EC2
                                    </a>
                                </li>
                                <li>
                                    <a href={`https://speakerdeck.com/takumiogawa/jaws-days-2022-satellites-pairsniokeruekssekiyuriteinoqu-rizu-mi`}>
                                        Overall design of kubernetes security and implementation of gatekeeper/conftest
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Site Reliability Engineer at &nbsp;
                    <a href={`https://mtch.com/`}>
                        Match Group (eureka, Inc.) &nbsp;
                    </a>
                    (March, 2020〜 March, 2022)
                    <ul >
                        <li>
                            Online Dating Service ( Number of Users Over 10 million, 3 Regions) &nbsp;
                            <a href={`https://www.pairs.lv/`}>
                                Pairs and Pairs Engage
                            </a>
                            <ul>
                                <li>Replace Infra Delivery Process(Terraform, Terraform Cloud, Github Actions)</li>
                                <li>AWS ECR vulnerability scan and workflow(AWS ECR, Confluence)</li>
                                <li>Self-Service with BotOps and CIOps(AWS Lambda, Serverless Framework, Slack, Github Actions)</li>
                                <li>Introduction of Postmortem template and PlayBook(RunBook)(Confluence)</li>
                                <li>Replace incident response system with Slack ChatBot</li>
                                <li>Migration of Pairs Engage server from AWS EC2 to FARGATE(Go, AWS, Datadog)</li>
                                <li>Migration and Encryption of User Message Data from RDS to DynamoDB(Go, AWS, Datadog)</li>
                                <li>Design and Implementation of Data Lifecycle Policy System(Go, AWS, GCP, BigQuery)</li>
                                <li>Migration of Pairs Batch server from AWS EC2 to FARGATE(Go, AWS Lambda, AWS Fargate, Serverless Framework, Terraform)</li>
                                <li>Migration app/user log infrastructure from Fluentd(td-agent) to AWS Firelens & Fluent bit</li>
                                <li>Support Data Platform Migration Project(AWS Kinesis Firehose, Fivetran Connector, Amazon EC2 Bastion)</li>
                                <li>Introduction of Image moderation/fraud image detection with GPU Inference(Amazon EKS, Kubernetes, Nvidia, Cuda, Pytorch)</li>
                                <li>Introduction of GitOps (Argocd, Github Actions, OIDC with AWS provider)</li>
                                <li>Introduction of Policy as Code to automate terraform code-review process(Conftest, OPA, Rego)</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Backend Engineer at &nbsp;
                        <a href={`https://wano.co.jp/`}>
                            Wano Co.,Ltd. &nbsp;
                        </a>
                        (Feb, 2019〜Feb, 2020)
                    <ul >
                        <li>
                            Music delivery system &nbsp;
                        <a href={`https://www.tunecore.co.jp/video_kicks?via=115&gclid=EAIaIQobChMI1PC0va6p4QIVU66WCh1VpQFlEAAYASAAEgJig_D_BwE`}>
                            VideoKicks
                        </a>
                            <ul>
                                <li>Development/Operation of APIs (Go, Clean Architecture)</li>
                                <li>Introduction and Enlightenment of CD with Gitops (CircleCI)</li>
                                <li>Introduction and Enlightenment of IaC (AWS, Terraform)</li>
                                <li>Introduction and Enlightenment of ChatOps (Slack)</li>
                                <li>Preliminary investigation and design of search infrastructure(Elasticsearch, Kibana)</li>
                                <li>Facilitation of US project</li>
                            </ul>
                        </li>
                        <li>
                            Shop recommend system of &nbsp;
                            <a href={`https://www.edocode.co.jp/`}>
                                Point Mall
                            </a>
                            <ul>
                                <li>Development of APIs (Go, Nginx, Clean Architecture)</li>
                                <li>Data source design (Mysql, Redis)</li>
                                <li>Overall infrastructure design and implementation (AWS, Terraform, Fluentd)</li>
                                <li>Production operation of application container(AWS ECS, Docker)</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    System Engineer at &nbsp;
                    <a href={`https://www.mizuho-ir.co.jp`}>
                        Mizuho Information & Research Institute, Inc.&nbsp;
                    </a>
                    (Apr, 2018 〜 Jan, 2019)
                    <ul >
                        <li>
                            International payment core system (Mainframe)
                            <ul>
                                <li>
                                    Project leader of &nbsp;
                                    <a href={`https://www.swift.com/`}>
                                        Swift &nbsp;
                                    </a>
                                    system-compliant projects (Requirement definition, Basic design)
                                </li>
                                <li>Regular maintenance(PL/I, JCL)</li>

                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Career
