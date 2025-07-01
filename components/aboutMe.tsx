"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, Rocket } from "lucide-react"

const AboutMe = () => {
  return (
    <section className="bg-zinc-900 text-white px-6 md:px-20 py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Code2 className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
          </motion.div>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Full-Stack Developer &<span className="text-purple-600"> AI Enthusiast</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Passionate developer specializing in modern web technologies. I create
                <span className="text-purple-600 font-medium"> responsive, user-centric applications</span> using React,
                Next.js, and cutting-edge AI tools.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Technical Expertise</h3>
                  <p className="text-gray-300 text-sm">Next.js, TypeScript, Tailwind CSS, Sanity CMS</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Rocket className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">AI & Web3 Certified</h3>
                  <p className="text-gray-300 text-sm">Agentic AI, Web 3.0, Digital Marketing & SEO</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.linkedin.com/in/vikram-s-404839217/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect With Me
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </div>

          {/* Right Column - Stats/Highlights */}
          <motion.div
            className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Experience</span>
                <span className="text-purple-600 font-semibold">2+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Projects Completed</span>
                <span className="text-purple-600 font-semibold">15+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Technologies</span>
                <span className="text-purple-600 font-semibold">10+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Education</span>
                <span className="text-purple-600 font-semibold">B.Com</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-700">
              <p className="text-center text-gray-300 text-sm italic">
                "Building the future, one line of code at a time"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutMe
