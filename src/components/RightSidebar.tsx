"use client"

import { ArrowPathIcon } from "@heroicons/react/24/outline"
import Calendar from "./Calendar"
import Schedule from "./Schedule"
import Image from "next/image"

interface ScheduleItem {
  id: number
  title: string
  dateRange: string
  image: string
  participants: string[]
  additionalCount: number
}

interface RightSidebarProps {
  selectedDate: Date
  setSelectedDate: (date: Date) => void
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
  highlightRange: {
    start: Date
    end: Date
  }
  scheduleItems: ScheduleItem[]
  onToggleCalendar: () => void
}

export default function RightSidebar({
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
  highlightRange,
  scheduleItems,
  onToggleCalendar,
}: RightSidebarProps) {
  return (
    <div className="w-full h-full bg-gray-50 px-4">

<div className=" bg-white p-4 rounded-lg shadow-md">  
  <div className="flex justify-center items-center">
  <div className="flex">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/jim.png"
                alt="Jemmy Max"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div >
              <p className="text-sm font-semibold text-gray-900">Jemmy Max</p>
              <p className="text-xs text-gray-500">Travel Enthusiast</p>
            </div>
            
          </div>
      {/* Switch Calendar Button */}
      <div className="mb-4">
        <button
          onClick={onToggleCalendar}
          className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
          title="Switch Calendar View"
        >
          <ArrowPathIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Switch Calendar</span>
        </button>
      </div>
 </div>  
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        highlightRange={highlightRange}
      />
      <Schedule scheduleItems={scheduleItems} />
    </div>
    </div>
    
       
       
  )
}
