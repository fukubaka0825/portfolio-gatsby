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
  const sections = [
    { id: 'FreelanceInfo', name: 'フリーランス', icon: '💼' },
    { id: 'Interest', name: 'スキル', icon: '🛠️' },
    { id: 'Career', name: 'キャリア', icon: '📈' },
    { id: 'Works', name: '実績', icon: '🚀' },
    { id: 'Contribution', name: 'OSS', icon: '🌟' },
    { id: 'Language', name: '言語', icon: '💻' },
    { id: 'Education', name: '学歴', icon: '🎓' },
    { id: 'Certification', name: '資格', icon: '📜' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Minimal Profile Section */}
          <div className="mb-12">
            {/* Avatar */}
            <div className="mb-6 flex justify-center">
              <StaticImage
                src="../assets/images/nari.png"
                alt="Takashi Narikawa"
                width={120}
                height={120}
                className="rounded-full shadow-sm"
              />
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-normal text-gray-900">
                Takashi Narikawa
              </h1>
              <div className="text-sm text-gray-600">
                Senior Software Engineer
              </div>
              <div className="text-xs text-gray-500">
                Machine Learning • MLOps • AIOps • SRE
              </div>
            </div>
          </div>

          {/* Section Launcher Grid */}
          <div className="mb-12">
            <h2 className="text-lg font-light text-gray-700 mb-8">Portfolio Sections</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative bg-white hover:bg-gray-50 border border-gray-100 hover:border-gray-200 rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-2xl mb-2">{section.icon}</div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {section.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Minimal Social Links */}
          <div className="mb-8">
            <div className="flex justify-center gap-4">
              {[
                { platform: 'github', url: `https://github.com/${user.github}`, icon: faGithub },
                { platform: 'twitter', url: `https://twitter.com/${user.twitter}`, icon: faTwitter },
                { platform: 'linkedin', url: `https://linkedin.com/in/${user.linkedin}`, icon: faLinkedin },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Minimal Navigation */}
          <div className="mb-8">
            <nav>
              <ul className="flex justify-center gap-6 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Subtle Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-1 animate-bounce">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header