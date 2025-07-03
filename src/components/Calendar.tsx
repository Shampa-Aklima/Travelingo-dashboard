"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  highlightRange: {
    start: Date;
    end: Date;
  };
}

export default function Calendar({
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
  highlightRange,
}: CalendarProps) {
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
  ];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    if (direction === "prev") {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const isSelected = (date: Date | null) => {
    if (!date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isInHighlightRange = (date: Date | null) => {
    if (
      !date ||
      !highlightRange ||
      !highlightRange.start ||
      !highlightRange.end
    )
      return false;
    const dateTime = date.getTime();
    const startTime = highlightRange.start.getTime();
    const endTime = highlightRange.end.getTime();
    return dateTime >= startTime && dateTime <= endTime;
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => navigateMonth("prev")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => navigateMonth("next")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-3">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          const isCurrentSelected = isSelected(date);
          const isHighlighted = isInHighlightRange(date);

          return (
            <button
              key={index}
              onClick={() => date && setSelectedDate(date)}
              disabled={!date}
              className={`
                h-10 w-10 text-sm flex items-center justify-center transition-all duration-200
                ${!date ? "invisible" : ""}
                ${
                  isCurrentSelected
                    ? "bg-teal-100 text-teal-700 rounded-full border-2 border-teal-300"
                    : ""
                }
                ${
                  isHighlighted
                    ? "bg-emerald-500 text-white rounded-full font-medium"
                    : ""
                }
                ${
                  !isCurrentSelected && !isHighlighted
                    ? "hover:bg-gray-100 text-gray-700 rounded-full"
                    : ""
                }
                ${!date ? "" : "cursor-pointer"}
              `}
            >
              {date?.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
