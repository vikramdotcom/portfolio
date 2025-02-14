"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  subtitle: string
  description: string
  image: string
  role: string
  year: string
  demoLink: string
}

const projects: Project[] = [
  {
    title: "TODO-APP",
    subtitle: "Now Make Your Daily Todos Easy!",
    description:
      "A sleek to-do app that streamlines your tasks. Organize and prioritize effortlessly while staying focused!",
    image: "/images/tt.png",
    role: "Frontend Developer 😎",
    year: "2024",
    demoLink: "https://to-do-app-three-cyan.vercel.app/",
  },
  {
    title: "COUNTDOWN-TIMER",
    subtitle: "Measure your daily activities!",
    description:
      "A sleek countdown timer to keep you on track. Set time limits effortlessly and stay focused on your goals.",
    image: "/images/ct.png",
    role: "Frontend Developer 😎",
    year: "2024",
    demoLink: "#",
  },
  {
    title: "DIGITAL CLOCK",
    subtitle: "A Modern Digital Clock",
    description:
      "A digital clock that keeps you in sync with every moment, designed for accuracy and style.",
    image: "/images/digitalClock.png",
    role: "Frontend Developer 😎",
    year: "2024",
    demoLink: "#",
  },
  {
    title: "TIC-TAC-TOE",
    subtitle: "A Modern Twist on Classic Fun!",
    description:
      "Challenge yourself in this sleek, intuitive Tic Tac Toe game with smooth gameplay and strategic fun!",
    image: "/images/tic.jpg",
    role: "Frontend Developer 😎",
    year: "2024",
    demoLink: "https://tic-tac-toe-xi-pied.vercel.app/",
  },
]

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-10 mb-20 p-6 bg-gray-800/60 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div className="lg:w-1/2 flex justify-center" whileHover={{ scale: 1.1 }}>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </motion.div>
      <div className="lg:w-1/2 space-y-4 text-white">
        <h2 className="text-4xl font-extrabold text-white">{project.title}</h2>
        <h3 className="text-2xl text-gray-300">{project.subtitle}</h3>
        <p className="text-gray-200 text-lg">{project.description}</p>
        <div className="bg-white/10 p-4 rounded-lg">
          <h4 className="text-xl font-semibold text-white">Project Details</h4>
          <hr className="border-white/20 my-2" />
          <div className="flex justify-between text-gray-300">
            <span>Role</span>
            <span>{project.role}</span>
          </div>
          <hr className="border-white/20 my-2" />
          <div className="flex justify-between text-gray-300">
            <span>Year</span>
            <span>{project.year}</span>
          </div>
        </div>
        <Button className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-purple-500 transition">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">MY PROJECTS</h1>
          <h3 className="text-2xl text-gray-200">Check Out My Latest Work</h3>
        </motion.div>
        <div className="grid gap-12 lg:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection