import { Metadata } from 'next'
import WorkExperience from '@/components/experience'

export const metadata: Metadata = {
  title: 'Work Experience',
  description: 'Explore my professional work experience and career journey as a Full-Stack Developer and AI Specialist.',
  openGraph: {
    title: 'Work Experience | Vikram Singh',
    description: 'Professional work experience and career journey.',
    url: 'https://vikrambuilds.site/experience',
    type: 'website',
  },
}

export default function Experiences() {
  return <WorkExperience />
}
