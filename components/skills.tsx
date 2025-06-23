"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Database,
  Server,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Palette,
  Zap,
  Box,
  Settings,
  FileCode,
  Layers,
  Monitor,
  Cpu,
  HardDrive,
  Workflow,
} from "lucide-react"

const skills = [
  { name: "React", icon: <Code2 className="w-10 h-10" />, color: "text-blue-400" },
  { name: "Next.js", icon: <Globe className="w-10 h-10" />, color: "text-white" },
  { name: "TypeScript", icon: <FileCode className="w-10 h-10" />, color: "text-blue-400" },
  { name: "JavaScript", icon: <Zap className="w-10 h-10" />, color: "text-yellow-400" },
  { name: "Node.js", icon: <Server className="w-10 h-10" />, color: "text-green-400" },
  { name: "Python", icon: <Terminal className="w-10 h-10" />, color: "text-blue-300" },
  { name: "PostgreSQL", icon: <Database className="w-10 h-10" />, color: "text-blue-300" },
  { name: "MongoDB", icon: <HardDrive className="w-10 h-10" />, color: "text-green-400" },
  { name: "AWS", icon: <Cloud className="w-10 h-10" />, color: "text-orange-400" },
  { name: "Docker", icon: <Box className="w-10 h-10" />, color: "text-blue-400" },
  { name: "Git", icon: <GitBranch className="w-10 h-10" />, color: "text-red-400" },
  { name: "Tailwind CSS", icon: <Palette className="w-10 h-10" />, color: "text-cyan-400" },
  { name: "GraphQL", icon: <Layers className="w-10 h-10" />, color: "text-pink-400" },
  { name: "Express.js", icon: <Workflow className="w-10 h-10" />, color: "text-gray-300" },
  { name: "Supabase", icon: <Database className="w-10 h-10" />, color: "text-green-300" },
  { name: "Vercel", icon: <Monitor className="w-10 h-10" />, color: "text-white" },
  { name: "Prisma", icon: <Settings className="w-10 h-10" />, color: "text-indigo-400" },
  { name: "Firebase", icon: <Zap className="w-10 h-10" />, color: "text-yellow-500" },
  { name: "React Native", icon: <Smartphone className="w-10 h-10" />, color: "text-blue-300" },
  { name: "Linux", icon: <Terminal className="w-10 h-10" />, color: "text-gray-200" },
]

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills & Technologies</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
        </div>

        {/* Animated Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-zinc-800 bg-zinc-800/50 backdrop-blur-sm hover:border-zinc-600 hover:bg-zinc-700/50"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-4 flex justify-center">
                  <div
                    className={`${skill.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float filter group-hover:drop-shadow-lg`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: "4s",
                    }}
                  >
                    {skill.icon}
                  </div>

                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                </div>

                <h3 className="font-semibold text-sm text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Animated underline */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 mx-auto mt-2"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Tech Badges */}
        <Card className="relative overflow-hidden border border-zinc-800 bg-zinc-800/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2 text-white">
              <Cpu className="w-6 h-6 animate-pulse text-blue-400" />
              Core Technologies
            </CardTitle>
            <CardDescription className="text-zinc-400">The foundation of my development stack</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.slice(0, 12).map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-zinc-700/50 text-zinc-300 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default animate-bounce-slow hover:scale-110 border border-zinc-600 hover:border-blue-400"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "3s",
                  }}
                >
                  <span className={`mr-2 ${tech.color} group-hover:text-white transition-colors`}>{tech.icon}</span>
                  {tech.name}
                </Badge>
              ))}
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
              <div
                className="absolute top-20 right-20 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-10 left-1/4 w-12 h-12 bg-green-500/10 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-20 right-1/3 w-14 h-14 bg-purple-500/10 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Stats with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "3+", label: "Years Experience", delay: "0s" },
            { value: "50+", label: "Projects Completed", delay: "0.2s" },
            { value: "20+", label: "Technologies", delay: "0.4s" },
            { value: "100%", label: "Passion for Code", delay: "0.6s" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300 animate-count-up"
                style={{ animationDelay: stat.delay }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes count-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-count-up {
          animation: count-up 0.8s ease-out forwards;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
