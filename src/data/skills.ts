export type SkillGroup = { name: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    name: 'LLM Platform',
    items: ['GenAI Platform', 'LLMOps', 'Langfuse', 'Amazon Bedrock', 'Evaluation', 'AI Agents'],
  },
  {
    name: 'MLOps',
    items: ['ML Pipelines', 'Model Monitoring', 'Text Moderation', 'NLP', 'Data Engineering'],
  },
  {
    name: 'Reliability',
    items: ['SRE', 'Observability', 'Incident Management', 'AIOps', 'Datadog', 'Sentry'],
  },
  {
    name: 'Cloud & Infra',
    items: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Amazon EKS / ECS', 'Docker'],
  },
  {
    name: 'Delivery',
    items: ['GitOps', 'Argo CD', 'GitHub Actions', 'Policy as Code', 'OPA / Rego', 'Conftest'],
  },
  { name: 'Languages', items: ['Python', 'Go', 'TypeScript', 'Shell'] },
  { name: 'Design', items: ['Domain-Driven Design', 'Clean Architecture', 'Microservices'] },
]
