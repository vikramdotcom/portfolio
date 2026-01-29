export function PersonStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vikram Singh',
    url: 'https://vikrambuilds.site',
    image: 'https://vikrambuilds.site/images/vikram_.png',
    jobTitle: 'Full-Stack Developer & AI Specialist',
    description: 'Professional Full-Stack Developer and AI Specialist specializing in Next.js, React, TypeScript, and Agentic AI',
    email: 'vikram.dev.co@gmail.com',
    sameAs: [
      'https://github.com/vikramdotcom',
      'https://linkedin.com/in/vikramdotcom',
      'https://twitter.com/vikramdotdev',
      'https://facebook.com/in/vikramdotcom',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Python',
      'Node.js',
      'Agentic AI',
      'Full-Stack Development',
      'Frontend Development',
      'Web Development',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Governor Sindh Initiative for GenAI, Web3, and Metaverse',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vikram Singh Portfolio',
    url: 'https://vikrambuilds.site',
    description: 'Professional Full-Stack Developer and AI Specialist portfolio showcasing projects, skills, and experience',
    author: {
      '@type': 'Person',
      name: 'Vikram Singh',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vikrambuilds.site/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ProfilePageStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Vikram Singh',
      alternateName: 'vikramdotcom',
      description: 'Full-Stack Developer & AI Specialist',
      image: 'https://vikrambuilds.site/images/vikram_.png',
      sameAs: [
        'https://github.com/vikramdotcom',
        'https://linkedin.com/in/vikramdotcom',
        'https://twitter.com/vikramdotdev',
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
