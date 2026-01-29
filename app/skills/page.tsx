import { Metadata } from 'next'
import SkillsSection from '@/components/skills'

export const metadata: Metadata = {
  title: 'Skills & Technologies',
  description: 'My technical skills and expertise including React, Next.js, TypeScript, Python, Node.js, PostgreSQL, MongoDB, AWS, Docker, and more modern web development technologies.',
  openGraph: {
    title: 'Skills & Technologies | Vikram Singh',
    description: 'Technical skills and expertise in modern web development technologies.',
    url: 'https://vikrambuilds.site/skills',
    type: 'website',
  },
}

export default function Skills() {
  return <SkillsSection />
}
