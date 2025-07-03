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
    <div className="bg-white rounded-2xl p-3 md:p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm md:text-base font-bold text-gray-900">Best Destination 🏔️</h2>
          <p className="text-xs text-gray-500">100 Destination found</p>
        </div>
        <button className="flex items-center space-x-1 px-2 md:px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50">
          <AdjustmentsHorizontalIcon className="w-3 h-3" />
          <span className="text-xs">Filters</span>
        </button>
      </div>

      <div className="space-y-2 md:space-y-3">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="flex items-center space-x-2 md:space-x-3 p-2 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              width={50}
              height={50}
              className="md:w-[60px] md:h-[60px] rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-xs md:text-sm font-semibold text-gray-900 truncate">{destination.name}</h3>
              <p className="text-xs text-gray-500 truncate">{destination.location}</p>
              <div className="flex items-center space-x-1 mt-0.5">
                <StarIcon className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                <span className="text-xs font-medium">{destination.rating}</span>
                <span className="text-xs text-gray-500">({destination.reviews})</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xs md:text-sm font-bold text-gray-900">₹{destination.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
