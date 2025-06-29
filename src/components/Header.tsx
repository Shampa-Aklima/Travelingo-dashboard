"use client"

import { MagnifyingGlassIcon, PencilIcon, Bars3Icon, CalendarIcon } from "@heroicons/react/24/outline"

interface HeaderProps {
  onMenuClick?: () => void
  onCalendarClick?: () => void
}

export default function Header({ onMenuClick, onCalendarClick }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Bars3Icon className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex-1 lg:flex-none">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">Hello, Jemmy 👋</h1>
          <p className="text-sm text-gray-600 mt-1 hidden sm:block">Welcome back and explore the world</p>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Mobile Calendar Button */}
          <button
            onClick={onCalendarClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <CalendarIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Search */}
          <div className="relative hidden sm:block">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search destination"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Edit Icon */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hidden sm:block">
            <PencilIcon className="w-5 h-5" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Jemmy Max</p>
              <p className="text-xs text-gray-500">Travel Enthusiast</p>
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center">
              <span className="text-white font-medium text-xs lg:text-sm">JM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
