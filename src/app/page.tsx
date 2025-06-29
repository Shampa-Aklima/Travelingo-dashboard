"use client"

import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import RightSidebar from "../components/RightSidebar"

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          onMenuClick={() => setSidebarOpen(true)}
          onCalendarClick={() => setRightSidebarOpen(!rightSidebarOpen)}
        />
        
        <div className="flex-1 flex overflow-hidden">
          <MainContent />
          
          {/* Right Sidebar */}
          <div className={`fixed inset-y-0 right-0 z-40 w-64 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
            rightSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}>
            <RightSidebar
              selectedDate={selectedDate}
              setSelectedDateAction={setSelectedDate}
              currentMonth={currentMonth}
              setCurrentMonthAction={setCurrentMonth}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
