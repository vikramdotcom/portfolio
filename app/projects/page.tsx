import { Metadata } from 'next'
import ProjectsSection from '@/components/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects including e-commerce platforms, AI applications, and full-stack web apps built with Next.js, React, TypeScript, and Python.',
  openGraph: {
    title: 'Projects | Vikram Singh',
    description: 'Explore my portfolio of web development projects including e-commerce platforms, AI applications, and full-stack web apps.',
    url: 'https://vikrambuilds.site/projects',
    type: 'website',
  },
}

export default function Projects() {
  return <ProjectsSection />
}
