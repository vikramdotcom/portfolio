"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Code2, Sparkles, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Full-Stack Developer", "Frontend Specialist", "Agentic AI Developer", "Next.js Expert"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900 text-white px-4 sm:px-6 lg:px-8 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto z-10 max-w-6xl">
        <motion.div className="text-center space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 border border-green-600/30 text-green-300 text-sm font-medium"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available for hire
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-300">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Vikram Singh
              </span>
            </h1>

            {/* Animated Role */}
            <div className="h-9 flex items-center justify-center">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-300"
              >
                {roles[currentRole]}
              </motion.h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-md sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about creating <span className="text-purple-400 font-semibold">modern web applications</span>{" "}
            with <span className="text-purple-400 font-semibold">React, Next.js, and TypeScript</span>.
            <br className="hidden sm:block" />
            Ready to bring your ideas to life with <span className="text-purple-400 font-semibold">clean code</span> and{" "}
            <span className="text-purple-400 font-semibold">exceptional user experiences</span>.
          </motion.p>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-center justify-center text-gray-400">
           
            <span>Open to Remote Work</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link href="/images/resume.pdf" target="_blank" download className="w-full sm:w-auto">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-600/25 group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            </Link>

            <Button
              variant="outline"
              className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent group"
            >
              <Link href="/projects" className="flex items-center">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-purple-600/20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Code2 size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-purple-600/20"
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Sparkles size={30} />
      </motion.div>
    </section>
  )
}

export default HeroSection
