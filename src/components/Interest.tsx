import React from 'react'

type InterestProps = {}

const Interest: React.FC<InterestProps> = () => {
    return (
        <section id="Interest" className="interest-section">
            <div className="skills-section">
                <h2>Skill/Interest</h2>
                <ul className="skill-list">
                    <li>SRE/Devops/AIOps</li>
                    <li>MLOps/LLMOps/Data Engineering</li>
                    <li>ML/NLP</li>
                    <li>Go/Python/Shell Script</li>
                    <li>Container(Docker/Kubernetes/AWS ECS)</li>
                    <li>Cloud Infrastructure Design(AWS/Google Cloud/Terraform)</li>
                    <li>Application Design(OOP,DDD)</li>
                    <li>Policy as Code(OPA/Rego/Conftest)</li>
                </ul>
            </div>
        </section>
    )
}

export default Interest
