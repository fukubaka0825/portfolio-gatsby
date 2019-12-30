import React from 'react'

type CareerProps = {
}

const Career: React.FC<CareerProps> = ({ }) => {

    return (
        <section id="Career">
            <h2>Career</h2>
            <ul className="alt">
                <li>
                    <h3>Backend Engineer at &nbsp;
                        <a href={`https://wano.co.jp/`}>
                            Wano Co.,Ltd. &nbsp;
                        </a>
                        (Feb,2019〜)
                    </h3>
                    <h4>
                        ・Music delivery system &nbsp;
                        <a href={`https://www.tunecore.co.jp/video_kicks?via=115&gclid=EAIaIQobChMI1PC0va6p4QIVU66WCh1VpQFlEAAYASAAEgJig_D_BwE`}>
                            VideoKicks
                        </a>
                    </h4>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Development/Operation of APIs (Go, Clean Architecture)</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Introduction and Enlightenment of CD with Gitops (CircleCI)</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Introduction and Enlightenment of IaC (Terraform)</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Introduction and Enlightenment of ChatOps (Slack)</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Facilitation of US project</h5>
                    <h4>
                        ・Shop recommend system of &nbsp;
                        <a href={`https://www.edocode.co.jp/`}>
                            Point Mall
                        </a>
                    </h4>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Development of APIs (Go, Nginx, Clean Architecture)</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Data source design (Mysql, Redis)</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Overall infrastructure design and implementation (Terraform)</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・Production operation of application container(AWS ECS)</h5>
                </li>
                <li>
                    <h3>System Engineer at &nbsp;
                        <a href={`https://www.mizuho-ir.co.jp`}>
                            Mizuho Information & Research Institute, Inc.&nbsp;
                        </a>
                        (Apr,2018 〜 Jan,2019)
                    </h3>
                    <h4>
                        ・International payment core system (mainframe)
                    </h4>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・ Project leader of  &nbsp;
                        <a href={`https://www.swift.com/`}>
                            Swift &nbsp;
                        </a>
                         system-compliant projects (Requirement definition,Basic design)
                    </h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・ Regular maintenance(PL/I,JCL)
                    </h5>
                </li>
            </ul>
        </section>
    )
}

export default Career
