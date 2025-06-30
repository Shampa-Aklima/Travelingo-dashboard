"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import MainContent from "@/components/MainContent"
import RightSidebar from "@/components/RightSidebar"

// Two different calendar states matching the screenshots
const calendarStates = [
  {
    id: "state-1",
    selectedDate: new Date(2025, 4, 3), // May 3, 2025 (light green circle)
    currentMonth: new Date(2025, 4, 1), // May 2025
    highlightRange: {
      start: new Date(2025, 4, 20), // May 20, 2025 (dark green)
      end: new Date(2025, 4, 23), // May 23, 2025 (dark green)
    },
    scheduleItems: [
      {
        id: 1,
        title: "Crooked Forest",
        dateRange: "20 may - 23 may",
        image: "/placeholder.svg?height=60&width=60",
        participants: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
        additionalCount: 16,
      },
    ],
  },
  {
    id: "state-2",
    selectedDate: new Date(2025, 4, 4), // May 4, 2025 (light green circle)
    currentMonth: new Date(2025, 4, 1), // May 2025
    highlightRange: {
      start: new Date(2025, 4, 21), // May 21, 2025 (dark green)
      end: new Date(2025, 4, 24), // May 24, 2025 (dark green)
    },
    scheduleItems: [
      {
        id: 1,
        title: "Crooked Forest",
        dateRange: "20 may - 23 may",
        image: "/placeholder.svg?height=60&width=60",
        participants: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
        additionalCount: 2,
      },
      {
        id: 2,
        title: "Fem Waterfall",
        dateRange: "20 may - 23 may",
        image: "/placeholder.svg?height=60&width=60",
        participants: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
        additionalCount: 2,
      },
      {
        id: 3,
        title: "Night Camping",
        dateRange: "20 may - 23 may",
        image: "/placeholder.svg?height=60&width=60",
        participants: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
        additionalCount: 2,
      },
    ],
  },
]

export default function Dashboard() {
  const [currentState, setCurrentState] = useState(0)
  const [selectedDate, setSelectedDate] = useState(calendarStates[currentState].selectedDate)
  const [currentMonth, setCurrentMonth] = useState(calendarStates[currentState].currentMonth)

  // Function to switch between calendar states
  const switchCalendarState = () => {
    const newState = currentState === 0 ? 1 : 0
    setCurrentState(newState)
    setSelectedDate(calendarStates[newState].selectedDate)
    setCurrentMonth(calendarStates[newState].currentMonth)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header onToggleCalendar={switchCalendarState} />
        <div className="flex-1 flex overflow-hidden">
          <MainContent />
          <RightSidebar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            highlightRange={calendarStates[currentState].highlightRange}
            scheduleItems={calendarStates[currentState].scheduleItems}
          />
        </div>
      </div>
    </div>
  )
}
