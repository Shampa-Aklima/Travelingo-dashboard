"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import MainContent from "./MainContent"
import RightSidebar from "./RightSidebar"

interface ScheduleItem {
  id: number
  title: string
  dateRange: string
  image: string
  participants: string[]
  additionalCount: number
}

interface DashboardConfig {
  id: string
  selectedDate: Date
  currentMonth: Date
  highlightRange: {
    start: Date
    end: Date
  }
  scheduleItems: ScheduleItem[]
}

interface DashboardProps {
  config: DashboardConfig
  onToggleCalendar: () => void
}

export default function Dashboard({ config, onToggleCalendar }: DashboardProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(config.selectedDate)
  const [currentMonth, setCurrentMonth] = useState<Date>(config.currentMonth)

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header onToggleCalendar={onToggleCalendar} />
        <div className="flex-1 flex overflow-hidden">
          <MainContent />
          <RightSidebar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            highlightRange={config.highlightRange}
            scheduleItems={config.scheduleItems}
          />
        </div>
      </div>
    </div>
  )
}
