import React from 'react'

const GradientBlock = () => {
  return (
    <div className="group relative">
      <div className="animate-tilt absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-300"></div>
      <div className="relative mt-4 flex items-center justify-center gap-4 rounded-xl bg-primary px-6 py-6 text-center text-sm text-gray-400">
        <img src="/logo/icon.png" className="h-4 w-4" />
        Hello, Welcome to axewhy!
      </div>
    </div>
  )
}

export default GradientBlock
