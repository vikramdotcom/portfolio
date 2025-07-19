"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      review:
        "Vikram delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
    },
    {
      id: 2,
      name: "Michael Chen",
      review:
        "Working with Vikram was a pleasure. He transformed our complex requirements into a beautiful, functional application.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      review:
        "Professional, reliable, and incredibly skilled. Vikram's work helped increase our conversion rate by 40%.",
    },
    {
      id: 4,
      name: "David Thompson",
      review:
        "The best developer we've worked with. Clean code, modern design, and delivered on time. Highly recommended!",
    },
    {
      id: 5,
      name: "Lisa Wang",
      review: "Vikram's expertise in React and Next.js is evident in every project. Our users love the new interface!",
    },
    {
      id: 6,
      name: "James Wilson",
      review: "Outstanding work on our e-commerce platform. The performance improvements were remarkable.",
    },
    {
      id: 7,
      name: "Anna Martinez",
      review:
        "Vikram's ability to understand complex business requirements and translate them into code is impressive.",
    },
    {
      id: 8,
      name: "Robert Kim",
      review:
        "Fast, efficient, and professional. The mobile responsiveness of our site is now perfect thanks to Vikram.",
    },
  ]

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews]

  const ProfileShape = ({ colorClass }: { colorClass: string }) => {
    return (
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"></div>
    )
  }

  const StarRating = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )

  return (
    <section className="py-16 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </motion.p>
        </div>
      </div>

      {/* Scrolling Reviews */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -50 * reviews.length + "%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-80 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 shadow-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile and Name */}
              <div className="flex flex-col items-center mb-4">
                <div className="mb-3 flex justify-center">
                  <ProfileShape colorClass="" />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-white font-semibold text-lg">{review.name}</h3>
                    <div className="relative">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <StarRating />
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed text-center italic">"{review.review}"</p>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-purple-600/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientReviews
