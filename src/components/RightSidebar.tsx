"use client"

import Calendar from "./Calendar"
import Schedule from "./Schedule"

interface RightSidebarProps {
  selectedDate: Date
  setSelectedDateAction: (date: Date) => void
  currentMonth: Date
  setCurrentMonthAction: (date: Date) => void
}

export default function RightSidebar({
  selectedDate,
  setSelectedDateAction,
  currentMonth,
  setCurrentMonthAction,
}: RightSidebarProps) {
  return (
    <div className="w-full lg:w-64 bg-white border-l border-gray-200 p-4 lg:p-6 overflow-y-auto h-full">
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDateAction}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonthAction}
      />
      <Schedule />
    </div>
  )
}
