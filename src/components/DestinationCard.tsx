"use client"

import Image from "next/image"
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid"

interface Destination {
  id: number
  title: string
  subtitle: string
  rating: number
  image: string
  gradient: string
}

const makeDestination = (id: number, title: string, subtitle: string, rating: number, image: string, gradient: string): Destination => {
  return {
    id,
    title,
    subtitle,
    rating,
    image,
    gradient
  }
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="relative w-full md:w-[250px] h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
      <Image
        src={destination.image || "/placeholder.svg"}
        alt={destination.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-60`}></div>
      <div className="absolute inset-0 p-3 flex flex-col justify-end text-white">
        {/* Title and Rating - Flex layout */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-bold">{destination.title}</h3>
          <div className="flex items-center space-x-1">
            <StarIcon className="w-3 h-3 text-white" />
            <span className="text-xs font-medium">{destination.rating}</span>
          </div>
        </div>

        {/* Subtitle with Location Icon */}
        <div className="flex items-center space-x-1">
          <MapPinIcon className="w-3 h-3 text-white opacity-90" />
          <p className="text-sm opacity-90">{destination.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export { makeDestination }
