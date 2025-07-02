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
    <div className="w-full h-full  bg-white flex flex-col">
      {/* Logo */}
      <div className="px-4 py-6">
        <h1 className="text-lg font-bold text-gray-900">Travelingo</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  activeItem === item.name ? "bg-emerald-500 text-white" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Discount Card */}
      <div >
        <div className="w-[200px] h-[265px] bg-[#b9f4e0] rounded-xl p-4 text-white relative overflow-hidden shadow-[22_4px_22px_0_rgba(#0000001F)]">
          <div className="relative z-10">
            <h3 className="text-2xl text-black mb-1"><span className="text-2xl text-[#FF8142]">50% </span>Discount</h3>
            <p className="text-xs opacity-90 mb-1">Special offer for you</p>
            <p className="text-xs opacity-75">Valid until 31 Dec</p>
          </div>
          <div className="absolute -top-3 -left-3 w-28 h-28 bg-[#b9f4e0]/10 rounded-full"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white/20 rounded-full"></div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Logout */}
      <div className="px-3 pb-4">
        <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
          <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
          Log Out
        </button>
      </div>
    </div>
  )
}

