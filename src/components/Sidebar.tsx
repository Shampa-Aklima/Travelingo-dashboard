"use client"

import { useState } from "react"
import {
  HomeIcon,
  TicketIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline"

const menuItems = [
  { name: "Dashboard", icon: HomeIcon, active: true },
  { name: "Ticket", icon: TicketIcon, active: false },
  { name: "Favorite", icon: HeartIcon, active: false },
  { name: "Message", icon: ChatBubbleLeftIcon, active: false },
  { name: "Transaction", icon: CreditCardIcon, active: false },
  { name: "Setting", icon: Cog6ToothIcon, active: false },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <div className="w-64 bg-white shadow-sm flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">Travelingo</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeItem === item.name ? "bg-emerald-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Discount Card */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1">50% Discount</h3>
            <p className="text-sm opacity-90 mb-3">Special offer for you</p>
            <p className="text-xs opacity-75">Valid until 31 Dec</p>
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full"></div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4">
        <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
          Log Out
        </button>
      </div>
    </div>
  )
}
