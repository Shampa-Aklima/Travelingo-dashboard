"use client"

import Image from "next/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { MapPinIcon } from "@heroicons/react/24/outline"

interface Destination {
  id: number
  title: string
  category: string
  image: string
  gradient: string
  rating: number
  reviews?: number
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="relative w-[272px] h-[373px] rounded-[26px] overflow-hidden group cursor-pointer px-2">
      <Image
        src={destination.image || "/placeholder.svg"}
        alt={destination.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-60`}></div>
      
      {/* Rating Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
        <StarIcon className="w-4 h-4 text-yellow-400" />
        <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <MapPinIcon className="w-4 h-4 opacity-80" />
            <span className="text-sm opacity-90">{destination.category}</span>
          </div>
          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">{destination.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
