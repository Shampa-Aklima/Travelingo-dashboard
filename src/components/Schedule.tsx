"use client"

import Image from "next/image"

interface ScheduleItem {
  id: number
  title: string
  dateRange: string
  image: string
  participants: string[]
  additionalCount: number
}

interface ScheduleProps {
  scheduleItems: ScheduleItem[]
}

export default function Schedule({ scheduleItems }: ScheduleProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">My Schedule</h2>

      <div className="space-y-1">
        {scheduleItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start space-x-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={90}
                height={90}
                className="rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base mb-2">{item.title}</h3>

                {/* Date Range */}
                <div className="flex items-center space-x-2 mb-2">
                  <div >
                    <span className="text-sm text-gray-600">{item.dateRange}</span>
                  </div>
                </div>

                {/* Participants */}
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {item.participants.slice(0, 3).map((participantImage, i) => (
                      <div key={i} className="w-5 h-5 relative rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src={participantImage || "/placeholder.svg"}
                          alt={`Participant ${i + 1}`}
                          width={20}
                          height={20}
                         
                        />
                      </div>
                    ))}
                  </div>
                  {/* Additional participants count */}
                  <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-lg">
                    +{item.additionalCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
