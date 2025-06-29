"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

interface CalendarProps {
  selectedDate: Date
  setSelectedDateAction: (date: Date) => void
  currentMonth: Date
  setCurrentMonthAction: (date: Date) => void
}

export default function Calendar({ selectedDate, setSelectedDateAction, currentMonth, setCurrentMonthAction }: CalendarProps) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth)
    if (direction === "prev") {
      newMonth.setMonth(newMonth.getMonth() - 1)
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1)
    }
    setCurrentMonthAction(newMonth)
  }

  const isToday = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date: Date | null) => {
    if (!date) return false
    return date.toDateString() === selectedDate.toDateString()
  }

  const days = getDaysInMonth(currentMonth)

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <div className="flex space-x-1">
          <button onClick={() => navigateMonth("prev")} className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button onClick={() => navigateMonth("next")} className="p-1 hover:bg-gray-100 rounded">
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => (
          <button
            key={index}
            onClick={() => date && setSelectedDateAction(date)}
            disabled={!date}
            className={`
              h-8 w-8 text-sm rounded-lg flex items-center justify-center transition-colors
              ${!date ? "invisible" : ""}
              ${isToday(date) ? "bg-emerald-500 text-white font-medium" : ""}
              ${isSelected(date) && !isToday(date) ? "bg-emerald-100 text-emerald-700 font-medium" : ""}
              ${!isToday(date) && !isSelected(date) ? "hover:bg-gray-100 text-gray-700" : ""}
            `}
          >
            {date?.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}
