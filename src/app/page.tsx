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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

  const switchCalendarState = () => {
    const newState = currentState === 0 ? 1 : 0
    setCurrentState(newState)
    setSelectedDate(calendarStates[newState].selectedDate)
    setCurrentMonth(calendarStates[newState].currentMonth)
  }

  return (
    <div className="w-full h-full px-2.5 py-2.5">
      <div className="w-full h-full bg-[#F4F8F7] rounded-[10px] overflow-hidden
                      grid grid-cols-1
                      md:grid-cols-4
                      lg:grid-cols-6">
        {/* Sidebar - Hidden on mobile, shown on md+ */}
        <div className="hidden md:block md:col-span-1 lg:col-span-1 border-r border-gray-100">
          <Sidebar />
        </div>

        {/* Main Content - Full width on mobile, adjusted on larger screens */}
        <div className="col-span-1
                        md:col-span-2
                        lg:col-span-3
                        flex flex-col border-r border-gray-100">
          <Header
            onToggleCalendar={switchCalendarState}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onToggleRightSidebar={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          />
          <div className="flex-1 overflow-hidden">
            <MainContent />
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile, shown on md+ */}
        <div className="hidden md:block md:col-span-1 lg:col-span-2">
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

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Mobile Right Sidebar Overlay */}
      {isRightSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsRightSidebarOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg">
            <RightSidebar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
              highlightRange={calendarStates[currentState].highlightRange}
              scheduleItems={calendarStates[currentState].scheduleItems}
              onToggleCalendar={switchCalendarState}
              onClose={() => setIsRightSidebarOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
