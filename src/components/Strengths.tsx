import React from 'react'

type StrengthsProps = {
}

const Strengths: React.FC<StrengthsProps> = ({ }) => {

    return (
        <section id="Strengths">
            <h2>Strengths</h2>
            <ul >
                <li>Ability to conduct systematic learning in areas in which they have no experience and to plan and execute significant projects.</li>
                <li>Ability to involve stakeholders as necessary, clarify the project background, outcomes, and acceptance conditions, and develop a schedule for execution.</li>
                <li>Ability to raise the knowledge baseline of the team and the company through workshops and proactive knowledge sharing</li>
                <li>Ability to build AWS/GCP infrastructure (IaC,Policy as Code with OPA/Rego/Conftest) and implement applications at the production level(Go,OOP,DDD)</li>
                <li>Ability to operate containers in a production environment using Kubernetes, etc.</li>
                <li>Ability to design and implement systems with considering non-functional requirements such as Monitoring/Logging/Observability/Capacity planning/Cost/Security/Privacy/Performance perspectives as SRE</li>
            </ul>
        </section>
    )
}

export default Strengths
