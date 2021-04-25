import React from 'react'

type InterestProps = {
}

const Interest: React.FC<InterestProps> = ({ }) => {

    return (
        <section id="Interest">
            <h2>Interest</h2>
            <ul >
                <li>SRE/Devops</li>
                <li>Go</li>
                <li>Container (Docker/Kubernetes)</li>
                <li>AWS/GCP/Terraform</li>
                <li>Application Design(OOP,DDD)</li>
                <li>Unity(3D Modeling)</li>
            </ul>
        </section>
    )
}

export default Interest
