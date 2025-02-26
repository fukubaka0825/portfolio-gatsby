import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'
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
      avatar: file(relativePath: { eq: "nari.png" }) {
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
          <p>Senior Software Engineer(MLOps/SRE) at &nbsp;</p>
          <p>
            <a href={`https://mtch.com/`}>
              Match Group (eureka, Inc. AI Team)
            </a>
          </p>
        </h1>
        <hr></hr>
        <h4>
          <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontSize: 20,
              }}
          >
            About
          </Link>
        </h4>
        <h4>
          <Link
              to="/blog"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontSize: 20,
              }}
          >
            Blog
          </Link>
        </h4>
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
