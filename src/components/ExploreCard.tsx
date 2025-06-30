"use client"

import Image from "next/image"
import { StarIcon } from "@heroicons/react/24/solid"

interface ExploreCardProps {
  image: string
  title: string
  location: string
  rating: number
  price: number
}

export default function ExploreCard({ image, title, location, rating, price }: ExploreCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="relative z-10">
        {/* Character/Image Section */}
        <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={80}
            height={80}
            className="object-cover rounded-2xl"
          />
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <div className="flex items-center space-x-1 mb-2">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm opacity-80">• {location}</span>
        </div>

        <p className="text-sm opacity-80 mb-6">Get special offers & news</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-sm opacity-80 ml-1">per person</span>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Join Now
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
    </div>
  )
}
