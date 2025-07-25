"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Code2, Sparkles, MapPin, Github, Linkedin, Twitter, Facebook } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

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

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/vikramdotdev", color: "hover:bg-blue-500" },
    { name: "GitHub", icon: Github, href: "https://github.com/vikramdotcom", color: "hover:bg-gray-700" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/vikramdotcom", color: "hover:bg-blue-600" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/in/vikramdotcom", color: "hover:bg-blue-600" },
  ]
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900 text-white px-4 sm:px-6 lg:px-8 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
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

      <div className="container mx-auto z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="block text-gray-300 py-2">Hello My Name is</span>
                <span className="block bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Vikram Singh
                </span>
              </h1>

              {/* Animated Role */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-300"
                >
                  {roles[currentRole]}
                </motion.h2>
              </div>
            </motion.div>

             {/* Social Media */}
             <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Follow me on your fav social media
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm transition-all duration-300 hover:scale-105 ${social.color} hover:text-white group`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4 group-hover:animate-bounce" />
                      <span className="text-gray-300 group-hover:text-white">{social.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/images/resume.pdf" target="_blank" download className="w-full sm:w-auto">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-600/25 group w-full sm:w-auto">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent group w-full sm:w-auto"
              >
                <Link href="/projects" className="flex items-center">
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-600/30 shadow-2xl mt-16 sm:mt-0">
                <Image
                  src="/images/vikram_.png"
                  alt="Vikram Singh - Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div variants={itemVariants} className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                      EXPERT
                      <br />
                      DEVELOPER
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400 animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>
              </div>
            </motion.div>

            {/* Description Card */}
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-8 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 max-w-sm shadow-xl hidden sm:block"
            >
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                As a professional web developer, I rely on top-notch tools like React, Next.js, and TypeScript to create
                stunning user experiences that captivate and engage.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-sm font-medium rounded-full transition-all duration-300">
                Explore Services
              </Button>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="absolute top-4 left-4 flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm text-gray-300"
            >
              <MapPin className="w-4 h-4 text-purple-400" />
              Open to Remote Work
            </motion.div>
          </motion.div>
        </div>
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
