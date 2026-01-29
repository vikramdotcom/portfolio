"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, User, Briefcase, Mail, Code, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()

    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      const navHeight = 64 // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/60 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="font-bold text-xl cursor-pointer"
            >
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Vikram
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                <Button size="sm" className="ml-4 bg-purple-600 hover:bg-purple-700 text-white">
                  Hire Me
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-900/98 backdrop-blur-sm border-t border-zinc-800">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </a>
                )
              })}
              <div className="pt-4 mt-4 border-t border-zinc-800">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="block"
                >
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Hire Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={closeMenu} />}
    </>
  )
}

export default Navbar
