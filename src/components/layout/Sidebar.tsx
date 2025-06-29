"use client"

import Button from "../ui/Button"
import Card from "../ui/Card"
import { Home, Ticket, Heart, MessageSquare, CreditCard, Settings, LogOut, Percent } from "lucide-react"
import { ComponentType } from "react"

interface NavigationItem {
  icon: ComponentType<{ className?: string }>
  label: string
  active: boolean
  onClick?: () => void
}

interface SidebarProps {
  navigationItems?: NavigationItem[]
  onLogout?: () => void
}

const defaultNavigation: NavigationItem[] = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Ticket, label: "Ticket", active: false },
  { icon: Heart, label: "Favorite", active: false },
  { icon: MessageSquare, label: "Message", active: false },
  { icon: CreditCard, label: "Transaction", active: false },
  { icon: Settings, label: "Setting", active: false },
]

export default function Sidebar({ navigationItems = defaultNavigation, onLogout }: SidebarProps) {
  return (
    <div className="w-64 bg-white p-6 flex flex-col h-screen">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900">Travelingo</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "primary" : "ghost"}
            className={`w-full justify-start gap-3 h-12 ${
              item.active
                ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
            onClick={item.onClick}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Discount Card */}
      <Card className="p-4 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white border-0 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Percent className="w-4 h-4" />
          </div>
          <div>
            <div className="text-lg font-bold">50% Discount</div>
            <div className="text-sm opacity-90">Get special offers & more!</div>
          </div>
        </div>
      </Card>

      {/* Log Out */}
      <Button variant="ghost" className="justify-start gap-3 h-12 text-gray-600 hover:text-gray-900" onClick={onLogout}>
        <LogOut className="w-5 h-5" />
        Log Out
      </Button>
    </div>
  )
}
