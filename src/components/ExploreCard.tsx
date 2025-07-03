"use client"

import Image from "next/image"

interface ExploreCardProps {
  image: string
  title: string
}

export default function ExploreCard({ title }: Omit<ExploreCardProps, 'image'>) {
  return (
    <div className="w-[200px] h-[373px] bg-[#1F2937] rounded-2xl overflow-hidden">
      <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
        <div className="relative mb-2">
         <Image
            src="/best-dest-card.png"
            alt="Character"
            width={184}
            height={206}
            className="relative z-10 mx-auto"
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">Get special offers & news</p>

        {/* Button */}
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl transition-colors duration-200">
          Join Now
        </button>
      </div>
    </div>
  )
}
