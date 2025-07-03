"use client"

import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"


interface HeaderProps {
  onToggleCalendar: () => void
}

export default function Header({}: HeaderProps) {
  return (
    <div className="bg-white px-4 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center">Hello, Jemmy 👋</h1>
          <p className="text-sm text-gray-600 mt-1">Welcome back and explore the world</p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search destination"
              className="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-48 bg-gray-50"
            />
          </div>

         
          <button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-lg">
            <BellIcon className="w-4 h-4" />
          </button>

          
          
        </div>
      </div>
    </div>
  )
}

