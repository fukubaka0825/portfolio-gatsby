import React from 'react'

type StrengthsProps = {
}

const Strengths: React.FC<StrengthsProps> = ({ }) => {

    return (
        <section id="Strengths">
            <h2>Strengths</h2>
            <ul >
                <li>Ability of SRE to design and implement systems/operations with considering non-functional requirements such as SLI・SLO/Performance/Observability/Monitoring/Logging/Capacity planning/Cost/Security/Privacy perspectives(with Design Doc/Production Readiness Checklist)</li>
                <li>Ability to build resilient and low-effort system with Cloud(AWS/GCP) infrastructure (IaC,Policy as Code with OPA/Rego/Conftest,Best Practice) and implement applications at the production level(Go,OOP,DDD)</li>
                <li>Ability to operate containers in production environments using Kubernetes/AWS ECS, etc.</li>
                <li>Ability to raise the knowledge baseline of the team and the company through workshops and proactive knowledge sharing</li>
                <li>Ability to conduct systematic learning in areas in which they have no experience and to plan and execute significant projects.</li>
                <li>Ability to involve stakeholders as necessary, clarify the project background, outcomes, and acceptance conditions, and develop a schedule for execution.</li>
            </ul>
        </section>
    )
}

export default Strengths
