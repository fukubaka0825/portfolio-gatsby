import React from 'react'

type ContributionProps = {
}

const Contribution: React.FC<ContributionProps> = ({ }) => {

    return (
        <section id="Contribution">
            <h2>Contribution</h2>
            <ul className="alt">
                <li>
                    <h3>OpenSource Contributions</h3>
                    <a className="item-title" href={`https://github.com/terraform-providers/terraform-provider-aws/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Afukubaka0825+state%3Aclosed+`}>
                        ・terraform-providers/terraform-provider-aws
                    </a><br/>
                    <a className="item-title" href={`https://github.com/mercari/tfnotify/pulls?q=is%3Apr+author%3Afukubaka0825+is%3Aclosed`}>
                        ・mercari/tfnotify
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Contribution
