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
  const achievements = [
    { number: "15M+", label: "Users Served" },
    { number: "6+", label: "Years Experience" },
    { number: "3", label: "Countries" },
    { number: "100+", label: "Projects Delivered" }
  ]

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Hero Section */}
          <div className="mb-16">
            {/* Avatar with enhanced styling */}
            <div className="mb-8 flex justify-center">
              <Link to="/" className="block group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                  <div className="relative">
                    <StaticImage
                      src="../assets/images/nari.png"
                      alt="Takashi Narikawa"
                      width={200}
                      height={200}
                      className="rounded-full shadow-2xl ring-8 ring-white/20 group-hover:ring-white/40 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Name and Title */}
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Takashi Narikawa
                </h1>
                <div className="text-xl md:text-2xl lg:text-3xl text-primary-200 font-light mb-2">
                  fukubaka0825
                </div>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Senior Software Engineer
                </h2>
                <div className="text-xl md:text-2xl text-primary-300 font-medium">
                  Machine Learning • MLOps • AIOps • SRE
                </div>
                <div className="text-lg md:text-xl text-primary-100">
                  <a 
                    href="https://mtch.com/" 
                    className="hover:text-white transition-colors duration-300 underline decoration-primary-400 underline-offset-4 hover:decoration-white"
                  >
                    Match Group (eureka, Inc. AI Team)
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Tagline */}
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-primary-100 leading-relaxed font-light">
                プロダクション環境での<span className="text-white font-semibold">MLOps・SRE経験</span>を活かし、
                <br className="hidden md:block" />
                <span className="text-white font-semibold">スケーラブルなAIシステム</span>の設計・運用を専門とするエンジニア
              </p>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-primary-200 text-sm md:text-base font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-16">
            <div className="flex justify-center gap-6">
              {[
                { platform: 'github', url: `https://github.com/${user.github}`, icon: faGithub },
                { platform: 'twitter', url: `https://twitter.com/${user.twitter}`, icon: faTwitter },
                { platform: 'linkedin', url: `https://linkedin.com/in/${user.linkedin}`, icon: faLinkedin },
                { platform: 'facebook', url: `https://facebook.com/${user.facebook}`, icon: faFacebook },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="group w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 flex items-center justify-center text-white hover:text-primary-200 transition-all duration-300 hover:scale-110 hover:rotate-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-16">
            <nav>
              <ul className="flex justify-center gap-8">
                <li>
                  <Link
                    to="/"
                    className="group px-8 py-4 text-lg font-semibold text-white hover:text-primary-200 transition-all duration-300 relative"
                  >
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"></div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="group px-8 py-4 text-lg font-semibold text-white hover:text-primary-200 transition-all duration-300 relative"
                  >
                    <span className="relative z-10">Blog</span>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"></div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <div className="text-primary-200 text-sm font-medium">Scroll Down</div>
              <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animation delays */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </header>
  )
}

export default Header