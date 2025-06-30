"use client"

import Image from "next/image"

interface ExploreCardProps {
  imageSrc: string
  title: string
  location: string
  rating: number
  price: number
}

export default function ExploreCard({ imageSrc, title, location, rating, price }: ExploreCardProps) {
  return (
    <div className="w-full bg-white rounded-xl p-4 flex gap-4 items-center hover:shadow-lg transition-shadow">
      <div className="relative w-[72px] h-[72px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>{location}</span>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>{rating}</span>
          </div>
        </div>
        <div className="text-[#00B087] font-semibold">
          ₹{price}
          <span className="text-xs text-gray-500 ml-1">INR</span>
        </div>
      </div>
    </div>
  )
}

