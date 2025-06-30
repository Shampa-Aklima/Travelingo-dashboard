"use client"

import { MagnifyingGlassIcon, PencilIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

interface HeaderProps {
  onToggleCalendar: () => void
}

export default function Header({ onToggleCalendar }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">Hello, Jemmy 👋</h1>
          <p className="text-sm text-gray-600 mt-1">Welcome back and explore the world</p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Calendar State Toggle Button */}
          <button
            onClick={onToggleCalendar}
            className="flex items-center space-x-2 px-3 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
            title="Switch Calendar View"
          >
            <ArrowPathIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Switch Calendar</span>
          </button>

          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search destination"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Edit Icon */}
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <PencilIcon className="w-5 h-5" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Jemmy Max</p>
              <p className="text-xs text-gray-500">Travel Enthusiast</p>
            </div>
            {/* Profile Photo */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Jemmy Max"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
