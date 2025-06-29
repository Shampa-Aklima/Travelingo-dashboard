"use client"

import Image from "next/image"

const scheduleItems = [
  {
    id: 1,
    title: "Crooked Forest",
    time: "10 May 2025",
    image: "/placeholder.svg?height=40&width=40",
    participants: 3,
  },
  {
    id: 2,
    title: "Fun Waterfall",
    time: "12 May 2025",
    image: "/placeholder.svg?height=40&width=40",
    participants: 2,
  },
  {
    id: 3,
    title: "Night Camping",
    time: "15 May 2025",
    image: "/placeholder.svg?height=40&width=40",
    participants: 5,
  },
]

export default function Schedule() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">My Schedule</h2>

      <div className="space-y-4">
        {scheduleItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={40}
              height={40}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
            <div className="flex -space-x-1">
              {Array.from({ length: Math.min(item.participants, 3) }).map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-white text-xs font-medium">{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
              {item.participants > 3 && (
                <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                  <span className="text-gray-600 text-xs">+{item.participants - 3}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
