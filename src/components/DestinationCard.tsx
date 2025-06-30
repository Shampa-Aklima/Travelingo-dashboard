"use client"

import Image from "next/image"

interface Destination {
  id: number
  title: string
  subtitle: string
  image: string
  gradient: string
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer">
      <Image
        src={destination.image || "/placeholder.svg"}
        alt={destination.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-60`}></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl font-bold mb-1">{destination.title}</h3>
        <p className="text-sm opacity-90">{destination.subtitle}</p>
      </div>
    </div>
  )
}
