import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import MainNav from '@components/Navigation/MainNav'

interface EmptyLayoutProps {
  children: React.ReactNode
}

const EmptyLayout = ({ children }: EmptyLayoutProps) => {
  return (
    <div className="relative pb-16 text-zinc-100">
      <MainNav />

      <div className="mx-auto max-w-14xl">
        <div className="my-2 px-4 text-zinc-400 lg:px-8">
          <button className=" flex items-center justify-between gap-x-1 rounded-sm py-1 text-xs hover:text-purple-300">
            <span>
              <ArrowLeftIcon className="h-3 w-3" />
            </span>
            Back
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default EmptyLayout
