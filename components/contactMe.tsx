"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, User, Mail, MessageSquare, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const Form = () => {
  const [state, handleSubmit] = useForm("xpwzljbl")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (state.succeeded) {
    return (
      <div className="bg-zinc-900 pb-8 min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm shadow-2xl animate-in fade-in-0 zoom-in-95 duration-500">
          <CardContent className="text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <CheckCircle className="w-16 h-16 text-green-400/30 mx-auto" />
              </div>
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto animate-in zoom-in-50 duration-700 delay-200" />
            </div>
            <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
              <h2 className="text-3xl font-bold text-gray-100 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-300 text-lg">Thank you for reaching out. I'll get back to you soon! 😎</p>
            </div>
            <Button
              onClick={() => window.location.reload()}
              className="mt-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-xl transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-in slide-in-from-bottom-4 delay-500"
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
    <div className="bg-zinc-900 pb-8 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Card
        className={`w-full max-w-md mx-auto p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm shadow-2xl relative transition-all duration-700 ${isVisible ? "animate-in fade-in-0 slide-in-from-bottom-8" : "opacity-0 translate-y-8"}`}
      >
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="w-8 h-8 text-purple-400/30" />
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Send a Message
          </CardTitle>
          <p className="text-gray-400 mt-2">Let's start a conversation</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div
              className={`space-y-2 transition-all duration-500 delay-100 ${isVisible ? "animate-in slide-in-from-left-4 fade-in-0" : "opacity-0 -translate-x-4"}`}
            >
              <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                <User className="w-4 h-4 mr-2 text-purple-400" />
                Name
              </label>
              <div className="relative group">
                <Input
                  id="name"
                  type="text"
                  name="name"
                  className="bg-gray-700/50 text-gray-100 border-gray-600/50 focus:border-purple-500 focus:ring-purple-500/20 focus:ring-2 transition-all duration-300 pl-4 pr-4 py-3 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 group-hover:border-gray-500"
                  required
                  placeholder="Your name"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Email Field */}
            <div
              className={`space-y-2 transition-all duration-500 delay-200 ${isVisible ? "animate-in slide-in-from-left-4 fade-in-0" : "opacity-0 -translate-x-4"}`}
            >
              <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                Email Address
              </label>
              <div className="relative group">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="bg-gray-700/50 text-gray-100 border-gray-600/50 focus:border-purple-500 focus:ring-purple-500/20 focus:ring-2 transition-all duration-300 pl-4 pr-4 py-3 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 group-hover:border-gray-500"
                  required
                  placeholder="email"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm flex items-center mt-2"
              />
            </div>

            {/* Message Field */}
            <div
              className={`space-y-2 transition-all duration-500 delay-300 ${isVisible ? "animate-in slide-in-from-left-4 fade-in-0" : "opacity-0 -translate-x-4"}`}
            >
              <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 mr-2 text-purple-400" />
                Message
              </label>
              <div className="relative group">
                <Textarea
                  id="message"
                  name="message"
                  className="bg-gray-700/50 text-gray-100 border-gray-600/50 focus:border-purple-500 focus:ring-purple-500/20 focus:ring-2 min-h-[120px] transition-all duration-300 pl-4 pr-4 py-3 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 group-hover:border-gray-500 resize-none"
                  required
                  placeholder="Your message here..."
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm flex items-center mt-2"
              />
            </div>

            {/* Submit Button */}
            <div
              className={`transition-all duration-500 delay-400 ${isVisible ? "animate-in slide-in-from-bottom-4 fade-in-0" : "opacity-0 translate-y-4"}`}
            >
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none py-4 rounded-xl font-semibold text-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center">
                  {state.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </div>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Form
