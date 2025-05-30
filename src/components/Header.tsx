import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
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

  return (
    <header className="lg:w-80 bg-gradient-to-br from-primary-950 to-primary-900 text-white flex flex-col">
      {/* Header Content */}
      <div className="flex-1 flex flex-col justify-between p-8 lg:p-12">
        <div className="space-y-6">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-start">
            <Link to="/" className="block">
              <div className="relative group">
                <StaticImage
                  src="../assets/images/nari.png"
                  alt="Takashi Narikawa"
                  width={120}
                  height={120}
                  className="rounded-full shadow-lg ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Name and Title */}
          <div className="text-center lg:text-left space-y-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              Takashi Narikawa
            </h1>
            <div className="space-y-1">
              <p className="text-primary-200 text-sm lg:text-base">
                Senior Software Engineer
              </p>
              <p className="text-primary-200 text-sm lg:text-base">
                (MLOps/SRE)
              </p>
              <p className="text-primary-100 text-sm lg:text-base">
                <a 
                  href="https://mtch.com/" 
                  className="hover:text-white transition-colors duration-200 underline decoration-primary-400 underline-offset-2"
                >
                  Match Group (eureka, Inc. AI Team)
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="pt-4">
            <ul className="flex lg:flex-col gap-4 lg:gap-2 justify-center lg:justify-start">
              <li>
                <Link
                  to="/"
                  className="text-primary-200 hover:text-white transition-colors duration-200 text-lg font-medium flex items-center gap-2 py-2 px-4 lg:px-0 rounded-lg lg:rounded-none hover:bg-white/10 lg:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-200 hover:text-white transition-colors duration-200 text-lg font-medium flex items-center gap-2 py-2 px-4 lg:px-0 rounded-lg lg:rounded-none hover:bg-white/10 lg:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Links and Footer */}
        <div className="space-y-6">
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a 
              href={`https://twitter.com/${user.twitter}`}
              className="social-icon group"
              aria-label="Twitter"
            >
              <FontAwesomeIcon 
                icon={['fab', 'twitter']} 
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
              />
            </a>
            <a 
              href={`https://github.com/${user.github}`}
              className="social-icon group"
              aria-label="GitHub"
            >
              <FontAwesomeIcon 
                icon={['fab', 'github']} 
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
              />
            </a>
            <a 
              href={`https://www.facebook.com/${user.facebook}`}
              className="social-icon group"
              aria-label="Facebook"
            >
              <FontAwesomeIcon 
                icon={['fab', 'facebook']} 
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
              />
            </a>
            <a 
              href={`https://www.linkedin.com/in/${user.linkedin}`}
              className="social-icon group"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon 
                icon={['fab', 'linkedin']} 
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-xs text-primary-300">
              &copy; 2025 {user.name}
            </p>
            <p className="text-xs text-primary-400 mt-1">
              Powered by Gatsby & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
