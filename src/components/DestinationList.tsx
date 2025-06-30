"use client"

import Image from "next/image"
import { StarIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"

interface Destination {
  id: number
  name: string
  location: string
  rating: number
  reviews: number
  price: number
  image: string
}

interface DestinationListProps {
  destinations: Destination[]
}

export default function DestinationList({ destinations }: DestinationListProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 sm:gap-0">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Best Destination 🏔️</h2>
          <p className="text-sm text-gray-500 mt-1">100 Destination found</p>
        </div>
        <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <AdjustmentsHorizontalIcon className="w-4 h-4" />
          <span className="text-sm">Filters</span>
        </button>
      </div>

      <div className="space-y-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                sizes="64px"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">{destination.name}</h3>
              <p className="text-sm text-gray-500">{destination.location}</p>
              <div className="flex items-center space-x-1 mt-1">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">{destination.rating}</span>
                <span className="text-sm text-gray-500">({destination.reviews})</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-gray-900">${destination.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
