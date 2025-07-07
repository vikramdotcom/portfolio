"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, Download, MapPin, Coffee, Award, Briefcase, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const AboutMe = () => {
  const achievements = [
    { icon: Code2, label: "Projects Completed", value: "30+", color: "text-blue-400" },
    { icon: Coffee, label: "Coffee Consumed", value: "800+", color: "text-amber-400" },
    { icon: Users, label: "Happy Clients", value: "25+", color: "text-green-400" },
    { icon: Award, label: "Years Experience", value: "2+", color: "text-purple-400" },
  ]

  const specializations = [
    { name: "Full Stack Development", description: "React, Next.js, TypeScript, Python, Postgres", color: "bg-purple-400" },
    { name: "AI Agents Developement", description: "Building ai agents", color: "bg-blue-400" },
    { name: "E-commerce Solutions", description: "Online stores & marketplaces", color: "bg-green-400" },
    { name: "Responsive Design", description: "Mobile-first approach", color: "bg-amber-400" },
  ]

  return (
    <section className="bg-zinc-900 text-white px-6 py-20 pt-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
          </div>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer ready to bring your ideas to life
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Introduction */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
              <h2 className="text-3xl font-bold mb-6">
                Full-Stack Developer <span className="text-purple-600">Seeking New Opportunities</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm <span className="text-white font-semibold">Vikram Singh</span>, a dedicated web developer with{" "}
                  <span className="text-purple-400 font-medium">2+ years of hands-on experience</span> building modern,
                  scalable web applications. I'm currently{" "}
                  <span className="text-green-400 font-medium">actively seeking new opportunities</span> to contribute
                  to innovative projects and grow with a dynamic team.
                </p>
                <p>
                  I specialize in creating{" "}
                  <span className="text-purple-400 font-medium">responsive, user-focused solutions</span> using React,
                  Next.js, and TypeScript. With a background in Commerce, I bring a unique business perspective to
                  technical challenges, ensuring solutions that are both technically sound and commercially viable.
                </p>
                <p>
                  Having completed <span className="text-purple-400 font-medium">30+ projects</span> ranging from
                  e-commerce platforms to productivity tools, I'm passionate about{" "}
                  <span className="text-purple-400 font-medium">clean code, user experience</span>, and delivering
                  results that exceed expectations. I'm eager to bring my skills to a team that values innovation and
                  quality.
                </p>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 mt-6">
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="font-semibold text-purple-300">Currently Looking For:</span>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1 ml-7">
                    <li>• Full-time Frontend/Full-Stack Developer positions</li>
                    <li>• Remote or hybrid work opportunities</li>
                    <li>• Collaborative teams focused on modern web technologies</li>
                    <li>• Projects involving React, Next.js, and TypeScript</li>
                  </ul>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-zinc-700">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Pakistan (Open to Remote)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span>Available immediately</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Open to full-time & freelance</span>
                </div>
              </div>
            </div>

            {/* Specializations Section */}
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
                Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={spec.name}
                    className="p-4 rounded-xl bg-zinc-700/30 border border-zinc-600/50 hover:border-purple-600/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`w-3 h-3 ${spec.color} rounded-full mr-3`}></div>
                      <h4 className="font-semibold text-white">{spec.name}</h4>
                    </div>
                    <p className="text-sm text-gray-400">{spec.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & CTA */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Quick Stats */}
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-xl font-bold mb-6 text-center">Professional Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={achievement.label}
                      className="text-center p-4 rounded-xl bg-zinc-700/30 border border-zinc-600/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${achievement.color}`} />
                      <div className="text-2xl font-bold text-white">{achievement.value}</div>
                      <div className="text-xs text-gray-400">{achievement.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                Education & Certs
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-zinc-700/30">
                  <div className="font-medium text-white text-sm">Bachelor of Commerce</div>
                  <div className="text-xs text-gray-400">University of Sindh</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-700/30">
                  <div className="font-medium text-white text-sm">Web Development</div>
                  <div className="text-xs text-gray-400">Self-taught & Certified</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-700/30">
                  <div className="font-medium text-white text-sm">AI & Modern Tech</div>
                  <div className="text-xs text-gray-400">Continuous Learning</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30">
              <h3 className="text-lg font-bold mb-4 text-center">Let's Connect</h3>
              <div className="space-y-3">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <a
                    href="https://www.linkedin.com/in/vikramsinghdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View LinkedIn Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </Button>
               
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">Ready to start immediately</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30">
              <h3 className="text-lg font-bold mb-4 text-center">View Latest Projects</h3>
              <div className="space-y-3">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <a
                    href="https://www.github.com/vikramdotcom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View my GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </Button>
               
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">Ready to work immediately</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic mb-4">
              "Great things are not done by impulse, but by a series of small things brought together."
            </blockquote>
            <cite className="text-purple-400 font-medium">- Vincent Van Gogh</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
