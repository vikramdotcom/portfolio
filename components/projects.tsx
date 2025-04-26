"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, ChevronRight, Calendar, User, Clock } from "lucide-react"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  githubLink: string
  liveLink: string
  date: string
  duration: string
  role: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "TODO-APP",
    subtitle: "Now Make Your Daily Todos Easy!",
    description:
      "A sleek to-do app that streamlines your tasks. Organize and prioritize effortlessly while staying focused!",
    longDescription:
      "Our TODO-APP is designed to revolutionize the way you manage your daily tasks. With an intuitive interface and powerful features, it helps you stay organized, focused, and productive. Whether you're a busy professional, a student, or anyone looking to better manage their time, our app provides the tools you need to succeed.",
    image: "/images/tt.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    features: [
      "Intuitive task creation and management",
      "Priority setting and task categorization",
      "Deadline reminders and notifications",
      "Progress tracking and productivity insights",
      "Cross-device synchronization",
    ],
    githubLink: "https://github.com/yourusername/todo-app",
    liveLink: "https://to-do-app-three-cyan.vercel.app/",
    date: "January 2024",
    duration: "6 weeks",
    role: "Frontend Developer",
  },
  {
    id: "2",
    title: "COUNTDOWN-TIMER",
    subtitle: "Measure your daily activities!",
    description:
      "A sleek countdown timer to keep you on track. Set time limits effortlessly and stay focused on your goals.",
    longDescription:
      "Our COUNTDOWN-TIMER is more than just a clock – it's a powerful tool for time management and productivity. Whether you're timing your work sessions, managing your breaks, or keeping track of important deadlines, this app provides a visually appealing and user-friendly way to stay on schedule.",
    image: "/images/ct.png",
    technologies: ["React", "JavaScript", "CSS3", "Redux"],
    features: [
      "Multiple timer support",
      "Customizable alerts and notifications",
      "Timer templates for quick setup",
      "Visual progress indicators",
      "Integration with task management systems",
    ],
    githubLink: "https://github.com/yourusername/countdown-timer",
    liveLink: "#",
    date: "March 2024",
    duration: "4 weeks",
    role: "Full-Stack Developer",
  },
  {
    id: "3",
    title: "DIGITAL CLOCK",
    subtitle: "A Modern Digital Clock",
    description: "A digital clock that keeps you in sync with every moment, designed for accuracy and style.",
    longDescription:
      "Our DIGITAL CLOCK is not just a timepiece – it's a statement. Combining sleek design with precise timekeeping, this app offers a modern take on the classic clock. Perfect for desktops, smart displays, or as a full-screen clock for any device, it brings both functionality and style to your digital environment.",
    image: "/images/digitalClock.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "SVG animations"],
    features: [
      "Multiple time zone support",
      "Customizable themes and layouts",
      "Alarm and timer functionality",
      "Weather integration",
      "Full-screen and widget modes",
    ],
    githubLink: "https://github.com/yourusername/digital-clock",
    liveLink: "#",
    date: "February 2024",
    duration: "3 weeks",
    role: "Frontend Developer",
  },
  {
    id: "4",
    title: "TIC-TAC-TOE",
    subtitle: "A Modern Twist on Classic Fun!",
    description: "Challenge yourself in this sleek, intuitive Tic Tac Toe game with smooth gameplay and strategic fun!",
    longDescription:
      "Our TIC-TAC-TOE game brings the classic paper-and-pencil game into the digital age. With a clean, modern interface and smooth animations, it offers an engaging experience for players of all ages. Whether you're playing against a friend or challenging our AI, you'll enjoy hours of strategic gameplay.",
    image: "/images/tic.jpg",
    technologies: ["React", "TypeScript", "CSS Modules", "AI algorithm"],
    features: [
      "Single-player mode with AI opponent",
      "Two-player local multiplayer",
      "Difficulty levels for AI",
      "Game history and statistics",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/yourusername/tic-tac-toe",
    liveLink: "https://tic-tac-toe-xi-pied.vercel.app/",
    date: "April 2024",
    duration: "2 weeks",
    role: "Game Developer",
  },
]

const ProjectCard: React.FC<{ project: Project; isSelected: boolean; onClick: () => void }> = ({
  project,
  isSelected,
  onClick,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 ${
        isSelected ? "scale-105 z-10" : "scale-100 hover:scale-102"
      }`}
      onClick={onClick}
    >
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover w-full h-64"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-2 line-clamp-2">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-300 dark:bg-gray-800 rounded-lg shadow-xl p-6 mt-8"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-64 md:h-auto"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{project.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{project.subtitle}</p>
          <p className="text-gray-600 dark:text-gray-400">{project.longDescription}</p>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar className="mr-2" size={16} /> {project.date}
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <Clock className="mr-2" size={16} /> Duration: {project.duration}
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <User className="mr-2" size={16} /> Role: {project.role}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 mt-8">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Github size={20} />
          View Code
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <ExternalLink size={20} />
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Innovative Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject?.id === project.id}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <AnimatePresence>{selectedProject && <ProjectDetails project={selectedProject} />}</AnimatePresence>
        {!selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-400 flex items-center justify-center">
              Select a project to view details
              <ChevronRight className="ml-2" />
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection

