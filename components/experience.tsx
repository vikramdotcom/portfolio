import type React from "react"
import { Briefcase, Calendar, ExternalLink } from "lucide-react"

interface WorkExperience {
  id: number
  title: string
  company: string
  location?: string
  website?: string
  duration: string
  responsibilities: string[]
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Web & AI Developer",
    company: "Upwork",
    duration: "Aug 2024 - Present",
    responsibilities: [
      "Developed responsive and interactive web applications using TypeScript Next.js and Tailwind CSS.",
      "Integrated Sanity CMS for dynamic content management.",
      "Optimized web pages for performance and SEO.",
      "Collaborated with designers and clients to deliver user-friendly UI/UX solutions.",
      "Developed modular and reusable components with Next.js and Tailwind CSS, ensuring high-quality, maintainable, and scalable codebases.",
      "Developed a modular, single-page web application in React that incorporated responsive design principles.",
    ],
  },
  {
    id: 2,
    title: "Home Tutor",
    company: "English language, Science and IT",
    duration: "Mar 2024 - Feb 2025",
    responsibilities: [
      "Provided personalized tutoring in commerce, computer science, and English language.",
      "Assisted students in improving their English speaking and writing skills.",
      "Prepared students for exams and improved their academic performance.",
      "Used interactive teaching methods to enhance student engagement and understanding.",
    ],
  },
  {
    id: 3,
    title: "Intern",
    company: "Combine Foundation",
    website: "www.combinegrp.com",
    duration: "May 2025 - July 2025",
    responsibilities: [
      "Frontend Development: Created fast, responsive interfaces using HTML, CSS, JavaScript, TypeScript, Reactjs, Nextjs, Sanity.",
      "E-commerce Development: Built and managed responsive e-commerce websites with payment integration.",
      "Portal Development: Developed secure and user friendly web portal with real-time features.",
      "Graphic Design: Designed creative visuals and brand assets for web and social media.",
      "Marketing: Managed social media content and campaigns to boost online reach and engagement.",
    ],
  },
]

const WorkExperience: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
          </div>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative bg-zinc-800/50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-600 hover:border-purple-600/50"
            >
              {/* Timeline Connector */}
              {index !== workExperiences.length - 1 && (
                <div className="absolute left-4 md:left-8 top-full w-0.5 h-8 bg-gradient-to-b from-purple-600 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute -left-2 md:-left-1 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-zinc-700"></div>

              {/* Content */}
              <div className="ml-6 md:ml-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{experience.title}</h3>
                    <div className="flex items-center text-purple-300 mb-2">
                      <span className="font-medium">{experience.company}</span>
                      {experience.website && (
                        <a
                          href={`https://${experience.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 hover:text-purple-200 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-zinc-300 text-sm md:text-base">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-zinc-300 leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
