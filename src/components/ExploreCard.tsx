"use client"

import Image from "next/image"

interface ExploreCardProps {
  image: string
  title: string
  location: string
  rating: number
  price: number
}

export default function ExploreCard({ image, title }: ExploreCardProps) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={image}
            alt={title}
            width={184}
            height={206 }
            className="object-cover rounded-full"
          />
          <div className="ml-2">
            <h3 className="text-lg font-bold">{title}</h3>
            </div>
        </div>
       
      </div>
      {/* Background decorative circles */}

      

    

      {/* Content at bottom */}
      <div className="relative z-10 mt-auto">
        <h3 className="text-xl font-bold mb-4 text-center">Let&apos;s Explore the beauty</h3>

        {/* Price */}
        <div className="text-center mb-4">
          <span className="text-lg font-semibold">₹50 x 2</span>
        </div>

        {/* Join Now Button */}
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
          Join Now
        </button>
      </div>
    </div>
    
  )
}
