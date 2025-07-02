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
    <div className="w-[200px] h-[350px] relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-2xl mt-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4">
        {/* Character/Avatar Section */}
        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="Character"
            width={200}
            height={200}
            className="object-cover rounded-xl"
          />
        </div>

        <h3 className="text-sm font-bold mb-1">Let&apos;s Explore the beauty</h3>

        <p className="text-xs opacity-80 mb-3">Get special offers & news</p>

        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-xs font-medium transition-colors">
          Join Now
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
    </div>
  )
}




