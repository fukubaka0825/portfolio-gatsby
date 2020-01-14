import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTwitter, faGithub, faFacebook, faLinkedin)

type HeaderProps = {
  user: {
    name: string | ''
    github: string | ''
    twitter: string | ''
    facebook: string | ''
    linkedin: string | ''
  }
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "avatar.jpeg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header id="header">
      <div className="inner">
        <a href="/" className="image avatar">
          <Img fixed={data.avatar.childImageSharp.fixed} />
        </a>
        <h1 color="#0000CD" >
          <strong>Takashi Narikawa</strong>{' '}
          <p>Backend engineer at &nbsp;
            <a href={`https://wano.co.jp/`}>
              Wano Co.,Ltd.
            </a>
          </p>
          <p>
            Age: 26 years old
          </p>
          <p>
            Computer Science student at
            <a href={`https://www.uopeople.edu/programs/cs/degrees/computer-science-bachelor-degree-2/`}>
              UoPeople
            </a>
          </p>
          <p>
            Member of &nbsp;
            <a href={`https://sre-next.dev/`}>
              SRE NEXT
            </a>
          </p>
          <p>
            Age: 26 years old
          </p>
        </h1>
      </div>
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href={`https://twitter.com/${user.twitter}`}>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </li>
            <li>
              <a href={`https://github.com/${user.github}`}>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li>
              <a href={`https://www.facebook.com/${user.facebook}`}>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
            </li>
            <li>
              <a href={`https://www.linkedin.com/in/${user.linkedin}`}>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; 2020 {user.name}</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
