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
    selectedDate: new Date(2025, 4, 3), 
    currentMonth: new Date(2025, 4, 1), 
    highlightRange: {
      start: new Date(2025, 4, 20), 
      end: new Date(2025, 4, 23), 
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
    selectedDate: new Date(2025, 4, 4), 
    currentMonth: new Date(2025, 4, 1), 
    highlightRange: {
      start: new Date(2025, 4, 21), 
      end: new Date(2025, 4, 24), 
    },
    scheduleItems: [
      {
        id: 1,
        title: "Crooked Forest",
        dateRange: "20 may - 23 may",
        image: "/crocked-forest.png",
        participants: [
          "/people1.jpg",
          "/people2.jpg",
          "/people3.jpg",
        ],
        additionalCount: 2,
      },
      {
        id: 2,
        title: "Fem Waterfall",
        dateRange: "20 may - 23 may",
        image: "/fem-waterfall.png",
        participants: [
          "/people1.jpg",
          "/people2.jpg",
          "/people3.jpg", 
        ],
        additionalCount: 2,
      },
      {
        id: 3,
        title: "Night Camping",
        dateRange: "20 may - 23 may",
        image: "/night-campaign.png",
        participants: [
          "/people1.jpg",
          "/people2.jpg",
          "/people3.jpg", 
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
    <div className="w-full h-full  px-2.5 py-2.5">
      <div className="w-full h-full bg-[#F4F8F7] rounded-[10px] overflow-hidden grid grid-cols-6">
      <div className="col-span-1 border-r border-gray-100">
          <Sidebar />
        </div> 
        <div className="col-span-3 flex flex-col border-r border-gray-100">
          <Header onToggleCalendar={switchCalendarState} />
          <div className="flex-1 overflow-hidden">
            <MainContent />
          </div>
        </div>    
        <div className="col-span-2">
          <RightSidebar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            highlightRange={calendarStates[currentState].highlightRange}
            scheduleItems={calendarStates[currentState].scheduleItems}
            onToggleCalendar={switchCalendarState}
          />
        </div>
      </div>
    </div>
  )
}
