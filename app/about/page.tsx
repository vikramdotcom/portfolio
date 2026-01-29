import { Metadata } from 'next'
import AboutMe from '@/components/aboutMe'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Vikram Singh, a passionate Full-Stack Developer and AI Specialist with expertise in Next.js, React, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'About Me | Vikram Singh',
    description: 'Learn more about Vikram Singh, a passionate Full-Stack Developer and AI Specialist.',
    url: 'https://vikrambuilds.site/about',
    type: 'profile',
  },
}

export default function About() {
  return <AboutMe />
}
