"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink, Calendar, Clock, User, Code2 } from "lucide-react"

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
  category: "project" 

}

const projects: Project[] = [
  {
    id: "1",
    title: "Avion Ecommerce Marketplace",
    subtitle: "Your One-Stop Shop for Everything!",
    description:
      "A modern e-commerce platform that connects buyers and sellers seamlessly. Built with Next.js and TypeScript, featuring user authentication, product management, and a complete checkout system.",
    longDescription:
      "Avion Ecommerce Marketplace is a cutting-edge e-commerce platform designed to provide a seamless shopping experience. With a user-friendly interface and powerful features, it connects buyers and sellers effortlessly.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    features: [
      "User authentication and profiles",
      "Product search and filtering",
      "Shopping cart and checkout process",
      "Order history and tracking",
      "Responsive design for all devices",
      "Admin dashboard for sellers",
    ],
    githubLink: "https://github.com/vikram-singh9/Quater02_Full-Stack_Marketplace_Hackathon",
    liveLink: "https://hackathone-quater-2.vercel.app/",
    date: "January 2024",
    duration: "1 day",
    role: "Full Stack Developer",
    category: "project",
  },
  {
    id: "2",
    title: "TODO-APP",
    subtitle: "Now Make Your Daily Todos Easy!",
    description:
      "A sleek to-do app that streamlines your tasks with intuitive design. Features priority setting, deadline reminders, and cross-device synchronization for maximum productivity.",
    longDescription:
      "Our TODO-APP is designed to revolutionize the way you manage your daily tasks. With an intuitive interface and powerful features, it helps you stay organized, focused, and productive.",
    image: "/placeholder.svg?height=800&width=1200",
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
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "3",
    title: "COUNTDOWN-TIMER",
    subtitle: "Measure your daily activities!",
    description:
      "A sleek countdown timer to keep you on track. Set time limits effortlessly and stay focused on your goals with customizable alerts and visual progress indicators.",
    longDescription:
      "Our COUNTDOWN-TIMER is more than just a clock – it's a powerful tool for time management and productivity. Whether you're timing your work sessions, managing your breaks, or keeping track of important deadlines, this app provides a visually appealing and user-friendly way to stay on schedule.",
    image: "/placeholder.svg?height=800&width=1200",
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
    duration: "1 day",
    role: "Full-Stack Developer",
    category: "project",
  },
  {
    id: "4",
    title: "DIGITAL CLOCK",
    subtitle: "A Modern Digital Clock",
    description:
      "A digital clock that keeps you in sync with every moment, designed for accuracy and style with multiple time zones and customizable themes.",
    longDescription:
      "Our DIGITAL CLOCK is not just a timepiece – it's a statement. Combining sleek design with precise timekeeping, this app offers a modern take on the classic clock. Perfect for desktops, smart displays, or as a full-screen clock for any device.",
    image: "/placeholder.svg?height=800&width=1200",
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
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "5",
    title: "TIC-TAC-TOE",
    subtitle: "A Modern Twist on Classic Fun!",
    description:
      "Challenge yourself in this sleek, intuitive Tic Tac Toe game with smooth gameplay, AI opponent, and strategic fun for players of all ages.",
    longDescription:
      "Our TIC-TAC-TOE game brings the classic paper-and-pencil game into the digital age. With a clean, modern interface and smooth animations, it offers an engaging experience for players of all ages.",
    image: "/placeholder.svg?height=800&width=1200",
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
    duration: "1 day",
    role: "Game Developer",
    category: "project",
  },
  {
    id: "6",
    title: "Dynamic Resume Builder",
    subtitle: "Create Your Perfect Resume!",
    description:
      "A dynamic resume builder that helps you create a professional resume in minutes with customizable templates, real-time preview, and easy download functionality.",
    longDescription:
      "Our Dynamic Resume Builder is designed to simplify the resume creation process. With a user-friendly interface and customizable templates, you can create a professional resume that stands out.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["React", "TypeScript", "Next.js", "CSS Modules", "Tailwind"],
    features: ["Customizable templates", "Real-time preview", "PDF export functionality", "Multiple format support"],
    githubLink: "https://github.com/vikram-singh9/Dynamic_Resume_Builder_Milestone02",
    liveLink: "https://dynamic-resume-builder-02.vercel.app/",
    date: "April 2023",
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "7",
    title: "Book Store",
    subtitle: "Your Gateway to Knowledge!",
    description:
      "A modern book store app that lets you explore, review, and purchase books with ease. Discover your next read with powerful search and user reviews.",
    longDescription:
      "Our Book Store app is designed for book lovers. With a sleek interface and powerful search features, you can easily find and explore your favorite books. Whether you're looking for the latest bestsellers or classic literature.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["React", "TypeScript", "Next.js", "CSS Modules", "Tailwind"],
    features: [
      "User authentication",
      "Book reviews and ratings",
      "Wishlist and favorites",
      "Order history and tracking",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Assignment_Books_Store_Crud_Operations",
    liveLink: "https://assignment-books-store-crud-operations.vercel.app/",
    date: "May 2024",
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "8",
    title: "Simple Audio Player",
    subtitle: "Your Music, Your Way!",
    description:
      "A simple audio player that lets you play, pause, and skip tracks effortlessly. Enjoy your music collection with volume control and playlist management.",
    longDescription:
      "Our Simple Audio Player is designed for music lovers. With a clean interface and easy-to-use controls, you can enjoy your favorite tracks without any hassle.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Audio API"],
    features: [
      "Play, pause, and skip tracks",
      "Volume control and mute options",
      "Playlist management",
      "Responsive design for all devices",
      "Customizable themes",
    ],
    githubLink: "https://github.com/vikram-singh9/audio_player_app_next15",
    liveLink: "https://audio-player-app-next15.vercel.app/",
    date: "Sept 2024",
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "9",
    title: "Calculator",
    subtitle: "Your Personal Math Assistant!",
    description:
      "A sleek calculator app that makes calculations easy and fun. Perform basic and advanced calculations effortlessly with history tracking and keyboard shortcuts.",
    longDescription:
      "Our Calculator app is designed for everyone. With a user-friendly interface and powerful features, you can perform basic and advanced calculations with ease.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["TypeScript", "Next.js", "CSS Modules", "Tailwind"],
    features: [
      "Basic and advanced calculations",
      "History of calculations",
      "Customizable themes",
      "Responsive design for all devices",
      "Keyboard shortcuts for quick access",
    ],
    githubLink: "https://github.com/vikram-singh9/NextJS_Calculater_App",
    liveLink: "https://next-js-calculater-app.vercel.app/",
    date: "June 2024",
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "10",
    title: "A Quiz App",
    subtitle: "Test Your Knowledge!",
    description:
      "A fun quiz app that challenges your knowledge across various topics. Compete with friends, track your scores, and enjoy timed quizzes with leaderboards.",
    longDescription:
      "Our Quiz App is designed for trivia lovers. With a wide range of topics and difficulty levels, you can test your knowledge and challenge your friends.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Quiz API"],
    features: [
      "Multiple quiz categories",
      "Timed quizzes and leaderboards",
      "User authentication and profiles",
      "Progress tracking and statistics",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/project-quiz-app",
    liveLink: "https://project-quiz-app-eta.vercel.app/",
    date: "Dec 2024",
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "11",
    title: "Snake Game",
    subtitle: "A Classic Snake Game",
    description:
      "A modern twist on the classic snake game. Eat, grow, and avoid crashing into yourself with smooth controls, vibrant graphics, and multiple levels.",
    longDescription:
      "Our Snake Game is a fun and addictive way to pass the time. With smooth controls and vibrant graphics, you can enjoy the classic gameplay with a modern touch.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Next.js", "TypeScript", "Tailwind", "CSS Modules"],
    features: [
      "Classic snake gameplay",
      "Multiple levels and challenges",
      "Leaderboard and achievements",
      "Customizable snake skins",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/yourusername/snake-game",
    liveLink: "https://snake-game-demo.vercel.app/",
    date: "Jan 2025",
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "12",
    title: "Next Js Notes App",
    subtitle: "Your Digital Notebook!",
    description:
      "A sleek notes app that helps you organize your thoughts and ideas. Create, edit, and manage your notes effortlessly with rich text editing and tagging.",
    longDescription:
      "Our Next Js Notes App is designed for students, professionals, and anyone who needs to keep track of their thoughts. With a clean interface and powerful features.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Tailwind"],
    features: [
      "User authentication and profiles",
      "Rich text editing",
      "Tagging and categorization",
      "Search and filter notes",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/notes-app-nextjs",
    liveLink: "https://notes-app-nextjs-six.vercel.app/",
    date: "January 2025",
    duration: "1 day",
    role: "Frontend Developer",
    category: "project",
  },
  {
    id: "13",
    title: "Streamlit Age Calculator",
    subtitle: "Calculate your age!",
    description:
      "A calculator app that helps you calculate your age in years, months, and days. Enter your birth date and get instant results with fun animations.",
    longDescription:
      "Our Streamlit Age Calculator is a simple yet powerful tool that helps you calculate your age in a fun and interactive way. Just enter your birth date, and get instant results.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant age calculation",
      "Responsive design for all devices",
      "Share your age with friends",
      "Fun animations and effects",
    ],
    githubLink: "https://github.com/vikram-singh9/Streamlit_Age_Calculater",
    liveLink: "https://appagecalculater-lyuvgtvblef6oadc5ynzps.streamlit.app/",
    date: "January 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
  {
    id: "14",
    title: "Data Sweeper",
    subtitle: "Convert into CSV!",
    description:
      "A data cleaning app that helps you convert your data into CSV format. Upload your data and get a clean CSV file instantly with various format support.",
    longDescription:
      "Our Data Sweeper app is designed for data enthusiasts and professionals. With a user-friendly interface, you can easily upload your data and convert it into CSV format.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant data conversion",
      "Supports various data formats",
      "Download your CSV file instantly",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Assignment01_Growth_MindSet_Challenge_Q3",
    liveLink: "https://vikram-singh9-assignment01-growth-mindset-file-converter-4ymf8c.streamlit.app/",
    date: "January 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
  {
    id: "15",
    title: "Meme Generator App",
    subtitle: "Generate memes with ease!",
    description:
      "A fun meme generator app that lets you create and share memes effortlessly. Choose images, add text, and share your creations on social media.",
    longDescription:
      "Our Meme Generator App is designed for meme lovers. With a user-friendly interface, you can easily choose images, add text, and create your own memes.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant meme generation",
      "Supports various image formats",
      "Share your memes on social media",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Random_Meme_Generator",
    liveLink: "https://randommemegenerator.streamlit.app/",
    date: "January 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
  {
    id: "16",
    title: "Random Movies Generator",
    subtitle: "Discover Your Next Favorite Film!",
    description:
      "A random movie generator app that helps you discover new films. Get personalized recommendations based on your preferences and save favorites.",
    longDescription:
      "Our Random Movies Generator app is designed for movie lovers. With a sleek interface and powerful algorithms, you can discover new films based on your preferences.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant movie recommendations",
      "Supports various genres and categories",
      "Save your favorite movies",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Movie_Search_App_Streamlit",
    liveLink: "#",
    date: "Feb 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
  {
    id: "17",
    title: "Mood Tracker App",
    subtitle: "Track Your Emotions!",
    description:
      "A mood tracker app that helps you monitor your emotions. Log your feelings and gain insights into your mental well-being with pattern visualization.",
    longDescription:
      "Our Mood Tracker App is designed for mental health enthusiasts. With a user-friendly interface, you can easily log your feelings and track your emotions over time.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant mood logging",
      "Supports various mood categories",
      "Visualize your mood patterns",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Python_Mood_Tracker",
    liveLink: "https://pythonmoodtracker.streamlit.app/",
    date: "March 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
  {
    id: "18",
    title: "Random Poem Generator",
    subtitle: "Generate random poem!",
    description:
      "Generate random poems by just clicking the generate button. It will create a random poem for you from the API with various categories and styles.",
    longDescription:
      "Generate random poems by just clicking on poem generate. It will generate a random poem for you from the API with support for various poem categories.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant poem generation",
      "Supports various poem categories",
      "Share your poems on social media",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Random_Poem_Generator_Streamlit",
    liveLink: "https://randompoemgeneratorappbyvikram.streamlit.app/",
    date: "Feb 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
  {
    id: "19",
    title: "Password Strength Checker",
    subtitle: "Check your password strength!",
    description:
      "A password strength checker app that helps you create strong passwords. Get instant feedback on your password strength with security recommendations.",
    longDescription:
      "Our Password Strength Checker app is designed for security-conscious users. With a sleek interface and powerful algorithms, you can easily check the strength of your passwords.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant password strength analysis",
      "Supports various password criteria",
      "Generate strong passwords",
      "Responsive design for all devices",
    ],
    githubLink: "https://vikram-singh9-assignment03-password-strength-meter-main-r1cdo0.streamlit.app/",
    liveLink: "https://vikram-singh9-assignment03-password-strength-meter-main-r1cdo0.streamlit.app/",
    date: "April 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
  {
    id: "20",
    title: "Unit Converter",
    subtitle: "Convert units easily!",
    description:
      "A unit converter app that helps you convert between different units. Get instant results for various conversions with customizable settings.",
    longDescription:
      "Our Unit Converter app is designed for anyone who needs to convert between different units. With a user-friendly interface, you can easily select units and get instant results.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Streamlit", "Python", "UV"],
    features: [
      "User-friendly interface",
      "Instant unit conversion",
      "Supports various unit categories",
      "Customizable conversion settings",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Assignment02_Unit_Converter_App_Q3",
    liveLink: "https://vikram-singh9-assignment02-unit-converter-app-q3-app-lffxhy.streamlit.app/",
    date: "Feb 2025",
    duration: "1 day",
    role: "Python Developer",
    category: "project",
  },
]

const ProjectShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProject = projects[currentIndex]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-900 py-8 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Orbs */}
        <motion.div
          key={`orb1-${currentProject.id}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"
        />
        <motion.div
          key={`orb2-${currentProject.id}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.03, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-l from-purple-600/15 to-blue-600/15 blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-purple-600/20 hover:border-purple-600/30 transition-all duration-300 group"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-purple-600/20 hover:border-purple-600/30 transition-all duration-300 group"
        aria-label="Next project"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Project Content */}
      <div className="relative flex items-center justify-center min-h-screen z-10">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          {/* Category Badge */}
          <motion.div
            key={`badge-${currentProject.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold bg-purple-600 text-white mb-4 md:mb-8 shadow-lg"
          >
            <Code2 className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            {currentProject.category.toUpperCase()} 
          </motion.div>

          {/* Title */}
          <motion.h1
            key={`title-${currentProject.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 md:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {currentProject.title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${currentProject.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-12 font-light"
          >
            {currentProject.subtitle}
          </motion.p>

          {/* Description - Always Visible */}
          <motion.div
            key={`description-${currentProject.id}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-10 mb-6 md:mb-10 border border-white/10 shadow-2xl"
          >
            <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed mb-4 md:mb-8 max-w-3xl mx-auto">
              {currentProject.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-8">
              {currentProject.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + 0.1 * index }}
                  className="px-2 md:px-4 py-1 md:py-2 bg-purple-600/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-purple-200 border border-purple-600/30 hover:bg-purple-600/30 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-gray-300">
              <div className="flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                <Calendar className="w-4 h-4 md:w-6 md:h-6 mb-1 md:mb-2 text-purple-400" />
                <span className="text-xs md:text-sm font-medium text-gray-400">Date</span>
                <span className="text-sm md:text-base text-white font-semibold">{currentProject.date}</span>
              </div>
              <div className="flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                <Clock className="w-4 h-4 md:w-6 md:h-6 mb-1 md:mb-2 text-purple-400" />
                <span className="text-xs md:text-sm font-medium text-gray-400">Duration</span>
                <span className="text-sm md:text-base text-white font-semibold">{currentProject.duration}</span>
              </div>
              <div className="flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                <User className="w-4 h-4 md:w-6 md:h-6 mb-1 md:mb-2 text-purple-400" />
                <span className="text-xs md:text-sm font-medium text-gray-400">Role</span>
                <span className="text-sm md:text-base text-white font-semibold">{currentProject.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center"
          >
            <motion.a
              href={currentProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg bg-purple-600 text-white hover:bg-purple-700 hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              View Live Demo
            </motion.a>

            <motion.a
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg bg-white/10 backdrop-blur-md border-2 border-purple-600/50 text-white hover:bg-purple-600/20 hover:border-purple-600/70 transition-all duration-300"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              Source Code
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Invisible Project Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 pointer-events-none">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className="w-3 h-3 rounded-full bg-white/30 mx-1"
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 z-20 px-3 md:px-6 py-2 md:py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm md:text-lg">
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="text-white/50 mx-1 md:mx-2">/</span>
        <span className="text-white/70">{String(projects.length).padStart(2, "0")}</span>
      </div>

      {/* Navigation Hint */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 text-white/40 text-xs md:text-sm text-right">
        <p>Use ← → arrows</p>
      </div>
    </section>
  )
}

export default ProjectShowcase
