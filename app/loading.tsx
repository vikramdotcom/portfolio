export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
