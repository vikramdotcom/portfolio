"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithubAlt, FaLinkedin , FaTwitter} from "react-icons/fa6"
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  return (
    <section className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl leading-snug sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <br />
              <span className="text-white">Vikram Singh.</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Web & Agentic AI Developer skilled in building interactive web applications with React, Next.js, and TypeScript. I also create AI agents for automation and problem-solving.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="bg-purple-600 hover:bg-purple-500 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
              <motion.a
                href="https://github.com/vikram-singh9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-purple-600 text-white p-3 rounded-full"
              >
                <FaGithubAlt size={24} />
              </motion.a>

              <motion.a
                href="https://x.com/vikramtechwala"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-purple-600 text-white p-3 rounded-full"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vikram-s-404839217/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-purple-600 text-white p-3 rounded-full"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 sm:w-80 sm:h-80 mx-auto">
              <Image
                src="/images/mypic.jpg"
                alt="Vikram Singh"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-purple-600 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <motion.div 
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="w-6 h-10 rounded-full border-2 border-purple-600 flex justify-center items-start p-2"
        >
          <motion.div className="w-1 h-1 rounded-full bg-purple-600 bg-opacity-90" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
