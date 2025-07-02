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
        image: "/crocked-forest.png",
        participants: ["/people1.jpg", "/people2.jpg", "/people3.jpg"],
        additionalCount: 2,
      },
      {
        id: 2,
        title: "Fem Waterfall",
        dateRange: "20 may - 23 may",
        image: "/fem-waterfall.png",
        participants: ["/people1.jpg", "/people2.jpg", "/people3.jpg"],
        additionalCount: 2,
      },
      {
        id: 3,
        title: "Night Camping",
        dateRange: "20 may - 23 may",
        image: "/night-campaign.png",
        participants: ["/people1.jpg", "/people2.jpg", "/people3.jpg"],
        additionalCount: 2,
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
        image: "/crocked-forest.png",
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
        image: "/fem-waterfall.png",
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
        image: "/night-campaign.png",
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

  const switchCalendarState = () => {
    const newState = currentState === 0 ? 1 : 0
    setCurrentState(newState)
    setSelectedDate(calendarStates[newState].selectedDate)
    setCurrentMonth(calendarStates[newState].currentMonth)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 px-2.5 py-2.5">
      <div className="w-full h-full bg-white rounded-[10px] overflow-hidden grid grid-cols-6">
        {/* Left Sidebar - 1 column */}
        <div className="col-span-1 border-r border-gray-100">
          <Sidebar />
        </div>

        {/* Main Content Area - 3 columns (double the sidebars) */}
        <div className="col-span-3 flex flex-col border-r border-gray-100">
          <Header onToggleCalendar={switchCalendarState} />
          <div className=" overflow-hidden">
            <MainContent />
          </div>
        </div>

        {/* Right Sidebar - 2 column */}
        <div className="col-span-2">
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
