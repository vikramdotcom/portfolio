"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Send,
  CheckCircle,
  User,
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react"
import { useState, useEffect } from "react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/vikram-singh9",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/vikramsinghdev",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-900/20",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/vikramtechwala",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-900/20",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/thaakur.saab",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-900/20",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/vikramintech",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-900/20",
  },
  {
    name: "Medium",
    icon: MessageSquare,
    url: "https://medium.com/@vkram",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-900/20",
  },
]

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xpwzljbl")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (state.succeeded) {
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center p-6">
        <Card className="w-full max-w-md mx-auto p-8 bg-zinc-800/50 border border-zinc-700 shadow-2xl">
          <CardContent className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-white">Message Sent Successfully!</h2>
              <p className="text-gray-300 text-lg">Thank you for reaching out. I'll get back to you soon! 😎</p>
            </div>
            <Button
              onClick={() => window.location.reload()}
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl transition-all duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg">Let's start a conversation and build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-zinc-800/50 border border-zinc-700 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-white">Send a Message</CardTitle>
              <p className="text-gray-400">Fill out the form below and I'll get back to you</p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300">
                    <User className="w-4 h-4 mr-2 text-purple-400" />
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    className="bg-zinc-700/50 text-white border-zinc-600 focus:border-purple-500 focus:ring-purple-500/20 rounded-lg"
                    required
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300">
                    <Mail className="w-4 h-4 mr-2 text-purple-400" />
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    className="bg-zinc-700/50 text-white border-zinc-600 focus:border-purple-500 focus:ring-purple-500/20 rounded-lg"
                    required
                    placeholder="your.email@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-300">
                    <MessageSquare className="w-4 h-4 mr-2 text-purple-400" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="bg-zinc-700/50 text-white border-zinc-600 focus:border-purple-500 focus:ring-purple-500/20 min-h-[120px] rounded-lg resize-none"
                    required
                    placeholder="Your message here..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  {state.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-zinc-800/50 border border-zinc-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Let's Connect</CardTitle>
                <p className="text-gray-400">Find me on these platforms</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center p-4 rounded-lg bg-zinc-700/30 border border-zinc-600 transition-all duration-300 ${social.bgColor} ${social.color} hover:scale-105 hover:border-zinc-500`}
                      >
                        <Icon className="w-6 h-6 mb-2" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-zinc-800/50 border border-zinc-700 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Info</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-purple-400" />
                    <span>vikram.dev.co@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-3 text-purple-400" />
                    <span>Available for freelance work</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-3 text-purple-400" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
