import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vikram Singh - Full-Stack Developer Portfolio',
    short_name: 'Vikram Singh',
    description: 'Professional Full-Stack Developer and AI Specialist specializing in Next.js, React, TypeScript, and Agentic AI',
    start_url: '/',
    display: 'standalone',
    background_color: '#18181b',
    theme_color: '#8B5CF6',
    icons: [
      {
        src: '/images/po.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
