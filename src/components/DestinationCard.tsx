"use client"

import Image from "next/image"

interface Destination {
  id: number
  title: string
  subtitle: string
  image: string
  gradient: string
}

const makeDestination = (id: number, title: string, subtitle: string, image: string, gradient: string): Destination => {
  return {
    id,
    title,
    subtitle,
    image,
    gradient
  }
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
      <Image
        src={destination.image || "/placeholder.svg"}
        alt={destination.title}
       fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-60`}></div>
      <div className="absolute inset-0 p-3 flex flex-col justify-end text-white">
        <h3 className="text-sm font-bold mb-0.5">{destination.title}</h3>
        <p className="text-xs opacity-90">{destination.subtitle}</p>
      </div>
    </div>
  )
}

export { makeDestination }
