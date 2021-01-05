import React from 'react'

type CareerProps = {
}

const Career: React.FC<CareerProps> = ({ }) => {

    return (
        <section id="Career">
            <h2>Career</h2>
            <ul >
                <li>
                    Site Reliability Engineer at &nbsp;
                    <a href={`https://eure.jp/`}>
                        eureka, Inc. &nbsp;
                    </a>
                    (March, 2020〜)
                    <ul >
                        <li>
                            Online Dating Service ( Number of Users Over 10 million, 3 Regions) &nbsp;
                            <a href={`https://www.pairs.lv/`}>
                                Pairs and Pairs Engage
                            </a>
                            <ul>
                                <li>Replace Infra Develiry Process</li>
                                <li>AWS ECR vulnerability scan and workflow</li>
                                <li>Self-Service(BotOps,CI/CD)</li>
                                <li>Introduction of Postmortem template and PlayBook(RunBook)</li>
                                <li>Replace on-call system</li>
                                <li>Migration of Pairs Engage server from AWS EC2 to FARGATE</li>
                                <li>Migration of User Message Data</li>
                                <li>Design and Implementation of Data Lifecycle Policy System</li>
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
