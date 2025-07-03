"use client";

import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import Image from "next/image";

interface ScheduleItem {
  id: number;
  title: string;
  dateRange: string;
  image: string;
  participants: string[];
  additionalCount: number;
}

interface RightSidebarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  highlightRange: {
    start: Date;
    end: Date;
  };
  scheduleItems: ScheduleItem[];
  onToggleCalendar: () => void;
  onClose?: () => void;
}

export default function RightSidebar({
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
  highlightRange,
  scheduleItems,
  onToggleCalendar,
  onClose,
}: RightSidebarProps) {
  return (
    <div className="w-full h-full bg-white px-4 py-3 relative">
      {/* Mobile Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}

      <div>
        <div className="flex justify-start items-center gap-3 md:gap-5 mb-4">
          <div className="flex gap-3 md:gap-4">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/jim.png"
                alt="Jemmy Max"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Jemmy Max</p>
              <p className="text-xs text-gray-500">Travel Enthusiast</p>
            </div>
          </div>
          {/* Switch Calendar Button */}
          <div className="ml-auto">
            <button
              onClick={onToggleCalendar}
              className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg"
              title="Switch Calendar View"
            >
              <ArrowPathIcon className="w-4 h-4" />
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
  );
}
