"use client"

import Image from "next/image"
import Calendar from "./Calendar"
import Schedule from "./Schedule"

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
}

export default function RightSidebar({
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
  highlightRange,
  scheduleItems,
}: RightSidebarProps) {
  return (
    <div className="w-full h-full bg-gray-50 px-4 py-4">
               {/* Profile */}
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">Jemmy Max</p>
              <p className="text-xs text-gray-500">Travel Enthusiast</p>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Jemmy Max"
                width={32}
                height={32}
                className="object-cover"
              />
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
  )
}
