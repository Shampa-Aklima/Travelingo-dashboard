"use client"

import Input from "../ui/Input"
import Avatar from "../ui/Avatar"
import { Search, Bell } from "lucide-react"

interface User {
  name: string
  title: string
  avatar?: string
  initials: string
}

interface HeaderProps {
  user: User
  greeting?: string
  subtitle?: string
  onSearch?: (query: string) => void
  onNotificationClick?: () => void
}

export default function Header({
  user,
  greeting = "Hello, Jemmy 👋",
  subtitle = "Welcome back and explore the world",
  onSearch,
  onNotificationClick,
}: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{greeting}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search destination"
            className="pl-10 w-64 bg-gray-50 border-0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch?.(e.target.value)}
          />
        </div>
        <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" onClick={onNotificationClick} />
        <div className="flex items-center gap-2">
          <Avatar src={user.avatar} fallback={user.initials} />
          <div className="text-sm">
            <div className="font-medium">{user.name}</div>
            <div className="text-gray-500">{user.title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
