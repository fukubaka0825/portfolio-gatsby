import React from 'react'

type InterestProps = {
}

const Interest: React.FC<InterestProps> = ({ }) => {

    return (
        <section id="Interest">
            <h2>Skill/Interest</h2>
            <ul >
                <li>SRE/Devops</li>
                <li>Go</li>
                <li>Container(Docker/Kubernetes)</li>
                <li>Cloud Infrastructure Design(AWS/GCP/Terraform)</li>
                <li>Application Design(OOP,DDD)</li>
                <li>XR Tech(Unity/Blender/3D Modeling)</li>
            </ul>
        </section>
    )
}

export default Interest
