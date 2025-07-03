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
    <div className="w-full h-full bg-white flex flex-col">
      {/* Logo */}
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Travelingo</h1>
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
      <div className="px-3 pb-3 ">
        <div className=" w-[190px] h-[250px] bg-[#B9F4E0] rounded-xl p-4 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl text-black font-bold mb-1"> <span className="text-xl text-[#FF8142]">50%</span> Discount</h3>
            <p className="text-xs text-[#5E5E5E] mb-1">Get a discount on certain days and
            don’t miss it. </p> 
          </div>
          <div className="absolute top-0 left-0 w-[100px] h-[100px]  bg-[#8df3d1] rounded-full"></div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#8df3d1] rounded-full"></div>
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
