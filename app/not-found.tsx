import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-200">Page Not Found</h2>
        <p className="text-gray-400 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
