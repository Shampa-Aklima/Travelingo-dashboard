"use client"

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
    <div className="w-80 bg-gray-50 p-6 overflow-y-auto">
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
