"use client"

import type React from "react"
import { Github, ExternalLink, Calendar, Code2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubLink: string
  liveLink: string
  date: string
  category: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Avion Ecommerce Marketplace",
    description:
      "A modern e-commerce platform built with Next.js and TypeScript, featuring user authentication, product management, shopping cart, and complete checkout system with responsive design.",
    image: "/images/ecom.jpg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubLink: "https://github.com/vikram-singh9/Quater02_Full-Stack_Marketplace_Hackathon",
    liveLink: "https://hackathone-quater-2.vercel.app/",
    date: "January 2024",
    category: "Full-Stack",
  },
  {
    id: "2",
    title: "Dynamic Resume Builder",
    description:
      "A professional resume builder with customizable templates, real-time preview, and PDF export functionality. Users can create stunning resumes in minutes with an intuitive interface.",
    image: "/images/rb.png?height=400&width=600",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/vikram-singh9/Dynamic_Resume_Builder_Milestone02",
    liveLink: "https://dynamic-resume-builder-02.vercel.app/",
    date: "April 2023",
    category: "Web App",
  },
  {
    id: "3",
    title: "Book Store Application",
    description:
      "A comprehensive book store app with user authentication, book reviews, wishlist functionality, and order tracking. Features a clean interface for browsing and purchasing books.",
    image: "/images/bs.png?height=400&width=600",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/vikram-singh9/Assignment_Books_Store_Crud_Operations",
    liveLink: "https://assignment-books-store-crud-operations.vercel.app/",
    date: "May 2024",
    category: "CRUD App",
  },
  {
    id: "4",
    title: "Interactive Quiz Application",
    description:
      "A fun and engaging quiz app with multiple categories, timed quizzes, leaderboards, and progress tracking. Perfect for testing knowledge across various topics.",
    image: "/images/qapp.png?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Quiz API"],
    githubLink: "https://github.com/vikram-singh9/project-quiz-app",
    liveLink: "https://project-quiz-app-eta.vercel.app/",
    date: "December 2024",
    category: "Interactive",
  },
  {
    id: "5",
    title: "Notes Management App",
    description:
      "A digital notebook application with rich text editing, tagging system, search functionality, and user authentication. Organize your thoughts and ideas efficiently.",
    image: "/images/notesapp.png?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Authentication"],
    githubLink: "https://github.com/vikram-singh9/notes-app-nextjs",
    liveLink: "https://notes-app-nextjs-six.vercel.app/",
    date: "January 2025",
    category: "Productivity",
  },
]

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in modern web development, from e-commerce platforms to
            productivity tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-zinc-800/50 border border-zinc-700 hover:border-purple-600/50 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-700/50 text-purple-300 text-sm rounded-lg border border-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button asChild className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-zinc-600 text-gray-300 hover:bg-zinc-700 hover:text-white bg-transparent"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
            <a
              href="https://github.com/vikram-singh9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
