import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { createAbsoluteUri } from '../lib/utils'

type HeadComponentProps = {
  pageTitle?: string
  pageDescription?: string
  pageUrl?: string
} & HelmetProps

const Head: React.FC<HeadComponentProps> = ({ pageTitle, pageDescription, pageUrl }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
          user {
            twitter
            github
            linkedin
            name
          }
        }
      }
      avatar: file(relativePath: { eq: "nari.png" }) {
        publicURL
      }
    }
  `)

  const {
    user,
    title,
    description,
    siteUrl,
    siteLanguage,
  } = data.site.siteMetadata

  const seoTitle = pageTitle ? `${pageTitle} | ${title}` : title
  const seoDescription = pageDescription || description
  const seoUrl = pageUrl ? `${siteUrl}${pageUrl}` : siteUrl
  const imageUrl = createAbsoluteUri(siteUrl, data.avatar.publicURL)

  return (
    <Helmet title={seoTitle}>
      <html lang={siteLanguage} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content="MLOps, SRE, Cloud Infrastructure, AWS, Terraform, Go, React, Gatsby, Portfolio, Freelance, fukubaka0825" />
      <meta name="author" content={user.name} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content="ja_JP" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${user.twitter}`} />
      <meta name="twitter:site" content={`@${user.twitter}`} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#08033d" />
      <meta name="msapplication-TileColor" content="#08033d" />
      <link rel="canonical" href={seoUrl} />
      
      {/* Structured Data for Portfolio */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": user.name,
          "jobTitle": "Senior Software Engineer (MLOps/SRE)",
          "worksFor": {
            "@type": "Organization",
            "name": "Match Group (eureka, Inc. AI Team)"
          },
          "url": siteUrl,
          "image": imageUrl,
          "sameAs": [
            `https://twitter.com/${user.twitter}`,
            `https://github.com/${user.github}`,
            `https://www.linkedin.com/in/${user.linkedin}`,
            "https://qiita.com/fukubaka0825"
          ],
          "knowsAbout": [
            "MLOps",
            "SRE",
            "Cloud Infrastructure", 
            "AWS",
            "Terraform",
            "Go",
            "Docker",
            "Kubernetes",
            "Machine Learning Operations"
          ],
          "description": seoDescription,
          "alumniOf": {
            "@type": "Organization",
            "name": "Shibaura Institute of Technology"
          }
        })}
      </script>
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  )
}

export default Head
