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
    title: "Avion Ecommerce Marketplace",
    subtitle: "Your One-Stop Shop for Everything!",
    description:
      "A modern e-commerce platform that connects buyers and sellers seamlessly. Shop, sell, and explore with ease!",
    longDescription:
      "Avion Ecommerce Marketplace is a cutting-edge e-commerce platform designed to provide a seamless shopping experience. With a user-friendly interface and powerful features, it connects buyers and sellers effortlessly. Whether you're looking for the latest gadgets, fashion, or home essentials, our marketplace has it all.",
    image: "/images/ecom.jpg",
    technologies: ["Nexjs", "TypeScript", "Tailwind CSS", "react.js"],
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
    duration: "1 week",
    role: "Full Stack Developer",
  },


  {
    id: "2",
    title: "TODO-APP",
    subtitle: "Now Make Your Daily Todos Easy!",
    description:
      "A sleek to-do app that streamlines your tasks. Organize and prioritize effortlessly while staying focused!",
    longDescription:
      "Our TODO-APP is designed to revolutionize the way you manage your daily tasks. With an intuitive interface and powerful features, it helps you stay organized, focused, and productive. Whether you're a busy professional, a student, or anyone looking to better manage their time, our app provides the tools you need to succeed.",
    image: "/images/todo.jpg",
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
    id: "3",
    title: "COUNTDOWN-TIMER",
    subtitle: "Measure your daily activities!",
    description:
      "A sleek countdown timer to keep you on track. Set time limits effortlessly and stay focused on your goals.",
    longDescription:
      "Our COUNTDOWN-TIMER is more than just a clock – it's a powerful tool for time management and productivity. Whether you're timing your work sessions, managing your breaks, or keeping track of important deadlines, this app provides a visually appealing and user-friendly way to stay on schedule.",
    image: "/images/timerrrr.jpg",
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
    id: "4",
    title: "DIGITAL CLOCK",
    subtitle: "A Modern Digital Clock",
    description: "A digital clock that keeps you in sync with every moment, designed for accuracy and style.",
    longDescription:
      "Our DIGITAL CLOCK is not just a timepiece – it's a statement. Combining sleek design with precise timekeeping, this app offers a modern take on the classic clock. Perfect for desktops, smart displays, or as a full-screen clock for any device, it brings both functionality and style to your digital environment.",
    image: "/images/clockk.jpg",
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
    id: "5",
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


  {
    id: "6",
    title: "Dynamic Resume Builder",
    subtitle: "Create Your Perfect Resume!",
    description: "A dynamic resume builder that helps you create a professional resume in minutes. Customize and download easily!",
    longDescription:
      "Our Dynamic Resume Builder is designed to simplify the resume creation process. With a user-friendly interface and customizable templates, you can create a professional resume that stands out. Whether you're a recent graduate or an experienced professional, our tool helps you showcase your skills and experience effectively.",
    image: "/images/resumeee.jpg",
    technologies: ["React", "TypeScript","Nextjs", "CSS Modules", "tailwind"],
    features: [
      "Customizable templates",
      "Real-time preview",
    ],
    githubLink: "https://github.com/vikram-singh9/Dynamic_Resume_Builder_Milestone02",
    liveLink: "https://dynamic-resume-builder-02.vercel.app/",
    date: "April 2023",
    duration: "2 weeks",
    role: "Frontend Developer",
  },


  {
    id: "7",
    title: "Book Store",
    subtitle: "Your Gateway to Knowledge!",
    description: "A modern book store app that lets you explore, review, and purchase books with ease. Discover your next read!",
    longDescription:
      "Our Book Store app is designed for book lovers. With a sleek interface and powerful search features, you can easily find and explore your favorite books. Whether you're looking for the latest bestsellers or classic literature, our app provides a seamless shopping experience.",
    image: "/images/book.jpg",
    technologies: ["React", "TypeScript", "nextjs", "CSS Modules", "tailwind"],
    features: [
      "User authentication",
      "Book reviews and ratings",sasa
      "Wishlist and favorites",
      "Order history and tracking",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Assignment_Books_Store_Crud_Operations",
    liveLink: "https://assignment-books-store-crud-operations.vercel.app/",
    date: "May 2024",
    duration: "2 weeks",
    role: "Frontend Developer",
  },


  {
    id: "8",
    title: "Simple Audio Player",
    subtitle: "Your Music, Your Way!",
    description: "A simple audio player that lets you play, pause, and skip tracks effortlessly. Enjoy your music collection!",
    longDescription:
      " Our Simple Audio Player is designed for music lovers. With a clean interface and easy-to-use controls, you can enjoy your favorite tracks without any hassle. Whether you're at home or on the go, our player provides a seamless listening experience.",
    image: "/images/audio.jpg",
    technologies: ["Nextjs", "TypeScript", "CSS Modules", "Audio API"],
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
  },


  {
    id: "9",
    title: "Calculator",
    subtitle: "Your Personal Math Assistant!",
    description: "A sleek calculator app that makes calculations easy and fun. Perform basic and advanced calculations effortlessly!",
    longDescription:
      "Our Calculator app is designed for everyone. With a user-friendly interface and powerful features, you can perform basic and advanced calculations with ease. Whether you're a student, a professional, or just need to crunch some numbers, our app provides the tools you need.",
    image: "/images/capp.png",
    technologies: ["TypeScript","nextjs", "CSS Modules", "tailwind"],
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
  },


  {
    id: "10",
    title: "A Quiz App",
    subtitle: "Test Your Knowledge!",
    description: "A fun quiz app that challenges your knowledge across various topics. Compete with friends and track your scores!",
    longDescription:
      "Our Quiz App is designed for trivia lovers. With a wide range of topics and difficulty levels, you can test your knowledge and challenge your friends. Whether you're preparing for a quiz competition or just want to have some fun, our app provides an engaging experience.",
    image: "/images/quiz.jpg",
    technologies: ["Nextjs", "TypeScript", "CSS Modules", "Quiz API"],
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
    duration: "2 days",
    role: "Frontend Developer",
  },


  {
    id: "11",
    title: "Snake Game",
    subtitle: "A Classic Snake Game",
    description: "A modern twist on the classic snake game. Eat, grow, and avoid crashing into yourself!",
    longDescription:
      "Our Snake Game is a fun and addictive way to pass the time. With smooth controls and vibrant graphics, you can enjoy the classic gameplay with a modern touch. Whether you're a casual gamer or a hardcore player, our game provides hours of entertainment.",
    image: "/images/snake.jpg",
    technologies: ["Nextjs", "TypeScript","Tailwind", "CSS Modules"],
    features: [
      "Classic snake gameplay",
      "Multiple levels and challenges",
      "Leaderboard and achievements",
      "Customizable snake skins",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/yourusername/tic-tac-toe",
    liveLink: "https://tic-tac-toe-xi-pied.vercel.app/",
    date: "Jan 2025",
    duration: "1 Day",
    role: "Frontend Developer",
  },


  {
    id: "12",
    title: "Next Js Notes App",
    subtitle: "Your Digital Notebook!",
    description:
      "A sleek notes app that helps you organize your thoughts and ideas. Create, edit, and manage your notes effortlessly!",
    longDescription:
      "Our Next Js Notes App is designed for students, professionals, and anyone who needs to keep track of their thoughts. With a clean interface and powerful features, you can create, edit, and manage your notes with ease. Whether you're taking class notes or jotting down ideas, our app provides a seamless experience.",
    image: "/images/notess.jpg",
    technologies: ["Nextjs", "TypeScript", "CSS Modules", "tailwind"],
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
    duration: "1 Day",
    role: "Frontend Developer",
  },


  {
    id: "13",
    title: "Streamlit age Calculater",
    subtitle: "Calculate your age!",
    description:
      "A calculator app that helps you calculate your age in years, months, and days. Enter your birth date and get instant results!",
    longDescription:
      "Our Streamlit Age Calculator is a simple yet powerful tool that helps you calculate your age in a fun and interactive way. Just enter your birth date, and the app will instantly provide you with your age in years, months, and days. It's perfect for anyone curious about their age or looking to celebrate their birthday!",
    image: "/images/ageca.jpg",
    technologies: ["streamlit", "Python", "uv"],
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
    duration: "1 Day",
    role: "Python Developer",
  },


  {
    id: "14",
    title: "Data Sweeper",
    subtitle: "convert into csv!",
    description:
      "A data cleaning app that helps you convert your data into CSV format. Upload your data and get a clean CSV file instantly!",
    longDescription:
      "Our Data Sweeper app is designed for data enthusiasts and professionals. With a user-friendly interface, you can easily upload your data and convert it into CSV format. Whether you're working with spreadsheets, databases, or any other data source, our app provides a seamless experience for cleaning and converting your data.",
    image: "/images/datas.jpg",
    technologies: ["streamlit", "Python", "uv"],
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
    duration: "1 Day",
    role: "Python Developer",
  },



  {
    id: "15",
    title: "Meme Generator App",
    subtitle: "Generate memes with ease!",
    description:
      "A fun meme generator app that lets you create and share memes effortlessly. Choose images, add text, and share your creations!",
    longDescription:
      "Our Meme Generator App is designed for meme lovers. With a user-friendly interface, you can easily choose images, add text, and create your own memes. Whether you're looking to share a laugh with friends or create viral content, our app provides the tools you need.",
    image: "/images/memege.jpg",
    technologies: ["streamlit", "Python", "uv"],
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
    duration: "1 Day",
    role: "python Developer",
  },



  {
    id: "16",
    title: "Random Movies Generator",
    subtitle: "Discover Your Next Favorite Film!",
    description:
      "A random movie generator app that helps you discover new films. Get personalized recommendations based on your preferences!",
    longDescription:
      "Our Random Movies Generator app is designed for movie lovers. With a sleek interface and powerful algorithms, you can discover new films based on your preferences. Whether you're looking for the latest blockbusters or hidden gems, our app provides personalized recommendations to enhance your movie-watching experience.",
    image: "/images/movi.jpg",
    technologies: ["streamlit", "Python", "uv"],
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
    duration: "1 Day",
    role: "python Developer",
  },



  {
    id: "17",
    title: "Mood Tracker App",
    subtitle: "Track Your Emotions!",
    description:
      "A mood tracker app that helps you monitor your emotions. Log your feelings and gain insights into your mental well-being!",
    longDescription:
      "Our Mood Tracker App is designed for mental health enthusiasts. With a user-friendly interface, you can easily log your feelings and track your emotions over time. Whether you're looking to improve your mental well-being or simply want to understand your mood patterns, our app provides valuable insights.",
    image: "/images/mood.jpg",
    technologies: ["streamlit", "Python", "uv"],
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
    duration: "1 Day",
    role: "python Developer",
  },
  
 

  {
    id: "18",
    title: "Random Poem Generator",
    subtitle: "Generate random poem!",
    description:
      "Generate random poem by just clicking on poem generate it will generate a random poem for you froom the API!",
    longDescription:
      "Generate random poem by just clicking on poem generate it will generate a random poem for you froom the API!",
    image: "/images/poeem.jpg",
    technologies: ["streamlit", "Python", "uv"],
    features: [
      "User-friendly interface",
      "Instant poem generation",
      "Supports various poem categories",
      "Share your poems on social media",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Random_Poem_Generator_Streamlit",
    liveLink: "https://randompoemgeneratorappbyvikram.streamlit.app/",
    date: "feb 2025",
    duration: "1 Day",
    role: "Python Developer",
  },

  {
    id: "19",
    title: "Password Strength Checker",
    subtitle: "check your password strength!",
    description:
      "A password strength checker app that helps you create strong passwords. Get instant feedback on your password strength!",
    longDescription:
      "Our Password Strength Checker app is designed for security-conscious users. With a sleek interface and powerful algorithms, you can easily check the strength of your passwords. Whether you're creating new passwords or updating existing ones, our app provides instant feedback to help you enhance your online security.",
    image: "/images/pswrd.jpg",
    technologies: ["streamlit", "Python", "uv"],
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
    duration: "1 Day",
    role: "Python Developer",
  },


  {
    id: "20",
    title: "unit converter",
    subtitle: "Convert units easily!",
    description:
      "A unit converter app that helps you convert between different units. Get instant results for various conversions!",
    longDescription:
      "Our Unit Converter app is designed for anyone who needs to convert between different units. With a user-friendly interface, you can easily select the units you want to convert and get instant results. Whether you're working with measurements, currencies, or any other units, our app provides a seamless experience.",
    image: "/images/unit.jpg",
    technologies: ["streamlit", "Python", "uv"],
    features: [
      "User-friendly interface",
      "Instant unit conversion",
      "Supports various unit categories",
      "Customizable conversion settings",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/vikram-singh9/Assignment02_Unit_Converter_App_Q3",
    liveLink: "https://vikram-singh9-assignment02-unit-converter-app-q3-app-lffxhy.streamlit.app/",
    date: "feb 2025",
    duration: "1 Day",
    role: "Python Developer",
  },


  // {
  //   id: "21",
  //   title: "unit converter",
  //   subtitle: "Convert units easily!",
  //   description:
  //     "A unit converter app that helps you convert between different units. Get instant results for various conversions!",
  //   longDescription:
  //     "Our Unit Converter app is designed for anyone who needs to convert between different units. With a user-friendly interface, you can easily select the units you want to convert and get instant results. Whether you're working with measurements, currencies, or any other units, our app provides a seamless experience.",
  //   image: "/images/unit.png",
  //   technologies: ["streamlit", "Python", "uv"],
  //   features: [
  //     "User-friendly interface",
  //     "Instant unit conversion",
  //     "Supports various unit categories",
  //     "Customizable conversion settings",
  //     "Responsive design for all devices",
  //   ],
  //   githubLink: "https://github.com/vikram-singh9/Assignment02_Unit_Converter_App_Q3",
  //   liveLink: "https://vikram-singh9-assignment02-unit-converter-app-q3-app-lffxhy.streamlit.app/",
  //   date: "feb 2025",
  //   duration: "1 Day",
  //   role: "Python Developer",
  // },


  // {
  //   id: "22",
  //   title: "unit converter",
  //   subtitle: "Convert units easily!",
  //   description:
  //     "A unit converter app that helps you convert between different units. Get instant results for various conversions!",
  //   longDescription:
  //     "Our Unit Converter app is designed for anyone who needs to convert between different units. With a user-friendly interface, you can easily select the units you want to convert and get instant results. Whether you're working with measurements, currencies, or any other units, our app provides a seamless experience.",
  //   image: "/images/unit.png",
  //   technologies: ["streamlit", "Python", "uv"],
  //   features: [
  //     "User-friendly interface",
  //     "Instant unit conversion",
  //     "Supports various unit categories",
  //     "Customizable conversion settings",
  //     "Responsive design for all devices",
  //   ],
  //   githubLink: "https://github.com/vikram-singh9/Assignment02_Unit_Converter_App_Q3",
  //   liveLink: "https://vikram-singh9-assignment02-unit-converter-app-q3-app-lffxhy.streamlit.app/",
  //   date: "feb 2025",
  //   duration: "1 Day",
  //   role: "Python Developer",
  // },
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
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#8AF9FF] to-[#FF74FD] bg-clip-text text-transparent"
        >
          MY WORK
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

