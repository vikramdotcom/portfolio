"use client"

import { motion } from "framer-motion"

const AboutMe = () => {
  return (
    <section className="bg-zinc-900 text-white px-6 md:px-20 py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-purple-600 mb-6">About Me!</h1>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center lg:text-left">Emerging | Frontend Developer</h2>
        <p className="leading-7 py-8 text-gray-300 text-lg">
          👋 Hi, I&apos;m <span className="text-white font-semibold">Vikram Singh</span>, a dedicated web developer with a
          strong focus on front-end technologies, crafting seamless and visually engaging web experiences. With expertise in{" "}
          <span className="text-purple-600 font-medium">React.js</span> and{" "}
          <span className="text-purple-600 font-medium">Next.js</span>, I aim to build efficient, clean, and maintainable code.
          My curiosity and passion drive me to push the boundaries of web development.
        </p>

        <p className="leading-7 text-gray-300 text-lg">
          🎓 I hold a <span className="text-purple-600 font-medium">Bachelor's degree in Commerce</span>, providing a strategic,
          business-oriented perspective in my projects. Additionally, I’m certified in{" "}
          <span className="text-purple-600 font-medium">Digital Marketing, SEO, Graphic Design, Generative AI, and Web 3.0</span>,
          blending creativity with technical skills to stay ahead in the evolving tech landscape.
        </p>

        <p className="leading-7 py-6 text-gray-300 text-lg">
          🔧 My strengths lie in building <span className="text-purple-600 font-medium">responsive, user-centric web applications</span>{" "}
          with modern tools like <span className="text-purple-600 font-medium">Next.js, Tailwind CSS, and ShadCN UI</span>. I thrive
          on solving complex problems, optimizing workflows, and creating intuitive digital solutions.
        </p>

        <p className="leading-7 text-gray-300 text-lg">
          🌱 Always eager to learn and embrace new challenges, I’m looking forward to collaborating with like-minded professionals.
          Let’s build something amazing together!
        </p>

        <div className="text-center mt-8">
          <motion.a
            href="https://www.linkedin.com/in/vikram-s-404839217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-purple-600 underline font-semibold hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            MORE ABOUT ME!
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe
