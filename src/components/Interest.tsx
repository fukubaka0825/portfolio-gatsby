import React from 'react'

type InterestProps = {
}

const Interest: React.FC<InterestProps> = ({ }) => {

    return (
        <section id="Interest">
            <h2>Skill/Interest</h2>
            <ul >
                <li>SRE/Devops/AIOps</li>
                <li>MLOps/LLMOps/Data Engineering</li>
                <li>ML/NLP</li>
                <li>Go/Python/Shell Script</li>
                <li>Container(Docker/Kubernetes/AWS ECS)</li>
                <li>Cloud Infrastructure Design(AWS/GCP/Terraform)</li>
                <li>Application Design(OOP,DDD)</li>
                <li>Policy as Code(OPA/Rego/Conftest)</li>
                <li>XR Tech(Unity/Blender/3D Modeling)</li>
            </ul>
        </section>
    )
}

export default Interest
