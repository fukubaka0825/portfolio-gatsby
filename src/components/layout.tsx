import React from 'react'
import '../styles/globals.css'

type TemplateProps = {
  children: React.ReactNode
}

const Template: React.FC<TemplateProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {children}
    </main>
  </div>
)

export default Template
