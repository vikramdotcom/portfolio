"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Form = () => {
  const [state, handleSubmit] = useForm("xpwzljbl")

  if (state.succeeded) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <CardContent className="text-center space-y-4">
          <div className="text-green-500 text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-800">Message Sent Successfully!</h2>
          <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon! 😎</p>
          <Button
            onClick={() => window.location.reload()}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className=" bg-gradient-to-br from-gray-900 to-black pb-8">

   
    <Card className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              className="bg-white text-gray-800"
              required
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              className="bg-white text-gray-800"
              required
              placeholder="your.email@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              className="bg-white text-gray-800 min-h-[120px]"
              required
              placeholder="Your message here..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
          </div>

          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default Form

