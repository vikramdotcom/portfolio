"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Mail, Code, Award } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Experience", href: "/experience", icon: Award },
  { name: "Contact", href: "/contactMe", icon: Mail },
]

export function FloatingNav() {
  // Custom mobile detection hook
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  // Use framer motion's scroll hook for better performance
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  const scrollDirection = useRef<"up" | "down">("up")

  // Throttle function for better performance
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout
    let lastExecTime = 0
    return (...args: any[]) => {
      const currentTime = Date.now()

      if (currentTime - lastExecTime > delay) {
        func(...args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(
          () => {
            func(...args)
            lastExecTime = Date.now()
          },
          delay - (currentTime - lastExecTime),
        )
      }
    }
  }, [])

  // Mobile detection with throttling
  useEffect(() => {
    const checkIfMobile = throttle(() => {
      setIsMobile(window.innerWidth < 768)
    }, 100)

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [throttle])

  // Optimized scroll handling with framer motion
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest
    const direction = currentScrollY > lastScrollY.current ? "down" : "up"

    // Update scroll direction
    scrollDirection.current = direction

    // Update visibility based on scroll position and direction
    if (currentScrollY < 100) {
      setIsVisible(false)
      setScrolled(false)
    } else {
      setIsVisible(true)
      setScrolled(currentScrollY > 20)
    }

    // Hide navbar when scrolling down fast, show when scrolling up
    if (currentScrollY > 200) {
      if (direction === "down" && currentScrollY - lastScrollY.current > 10) {
        setIsVisible(false)
      } else if (direction === "up") {
        setIsVisible(true)
      }
    }

    lastScrollY.current = currentScrollY
  })

  // Active section detection with throttling
  useEffect(() => {
    const updateActiveSection = throttle(() => {
      const sections = navItems.map((item) => {
        // Handle different href formats
        let sectionId = item.href
        if (sectionId.startsWith("/")) {
          sectionId = sectionId.substring(1) || "home"
        }
        if (sectionId.startsWith(".")) {
          sectionId = sectionId.substring(1)
        }
        return sectionId
      })

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }, 100)

    window.addEventListener("scroll", updateActiveSection, { passive: true })
    return () => window.removeEventListener("scroll", updateActiveSection)
  }, [activeSection, throttle])

  const handleNavClick = useCallback(
    (href: string) => {
      if (isMobile) {
        setIsOpen(false)
      }

      // Handle different href formats for smooth scrolling
      let targetId = href
      if (href.startsWith("/")) {
        targetId = href.substring(1) || "home"
      }
      if (href.startsWith(".")) {
        targetId = href.substring(1)
      }

      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }
    },
    [isMobile],
  )

  // Animation variants with improved easing
  const navVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      y: -20,
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      scale: 0.9,
    },
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        style={{ willChange: "transform" }}
      >
        <motion.div
          className={`relative px-6 py-4 rounded-2xl transition-all duration-500 ease-out ${
            scrolled
              ? "bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/60 shadow-2xl"
              : "bg-zinc-900/70 backdrop-blur-lg border border-zinc-700/40"
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur opacity-50"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex items-center justify-center gap-4 z-10">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="font-bold text-xl mr-8" onClick={() => handleNavClick("/")}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                  Vikram
                </span>
                <span className="text-white ml-1">S</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  let sectionId = item.href
                  if (sectionId.startsWith("/")) {
                    sectionId = sectionId.substring(1) || "home"
                  }
                  if (sectionId.startsWith(".")) {
                    sectionId = sectionId.substring(1)
                  }
                  const isActive = activeSection === sectionId

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/40 shadow-lg"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="hidden lg:inline">{item.name}</span>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            layoutId="activeIndicator"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{ x: "-50%" }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Hire Me
                  </Button>
                </motion.div>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-xl bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-400 hover:text-white transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
            >
              <div className="relative p-6 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/60 shadow-2xl">
                {/* Animated background */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur opacity-50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    let sectionId = item.href
                    if (sectionId.startsWith("/")) {
                      sectionId = sectionId.substring(1) || "home"
                    }
                    if (sectionId.startsWith(".")) {
                      sectionId = sectionId.substring(1)
                    }
                    const isActive = activeSection === sectionId

                    return (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                            isActive
                              ? "text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/40"
                              : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{item.name}</span>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}

                  {/* Mobile CTA */}
                  <motion.div variants={itemVariants} className="pt-4 mt-4 border-t border-zinc-800">
                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 text-white font-medium py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Hire Me
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quick Access Floating Button (Mobile) */}
      {isMobile && !isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.3, type: "spring", stiffness: 300 }}
        >
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </motion.div>
      )}
    </>
  )
}

export default FloatingNav
