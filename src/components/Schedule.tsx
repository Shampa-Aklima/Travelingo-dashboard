"use client";

import Image from "next/image";

interface ScheduleItem {
  id: number;
  title: string;
  dateRange: string;
  image: string;
  participants: string[];
  additionalCount: number;
}

interface ScheduleProps {
  scheduleItems: ScheduleItem[];
}

export default function Schedule({ scheduleItems }: ScheduleProps) {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">My Schedule</h2>

      <div className="space-y-2 md:space-y-3">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start space-x-3 md:space-x-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={70}
                height={70}
                className="md:w-[90px] md:h-[90px] rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2 truncate">
                  {item.title}
                </h3>

                {/* Date Range */}
                <div className="flex items-center space-x-2 mb-1 md:mb-2">
                  <div>
                    <span className="text-xs md:text-sm text-gray-600">
                      {item.dateRange}
                    </span>
                  </div>
                </div>

                {/* Participants */}
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1 md:-space-x-2">
                    {item.participants
                      .slice(0, 3)
                      .map((participantImage, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 md:w-6 md:h-6 relative rounded-full border-2 border-white overflow-hidden flex-shrink-0"
                        >
                          <Image
                            src={participantImage || "/placeholder.svg"}
                            alt={`Participant ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                  </div>
                  {/* Additional participants count */}
                  <span className="text-xs md:text-sm font-medium text-teal-600 bg-teal-50 px-1.5 md:px-2 py-0.5 md:py-1 rounded-lg">
                    +{item.additionalCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
