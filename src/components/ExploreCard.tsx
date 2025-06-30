"use client"

import Image from "next/image"

export default function ExploreCard() {
  return (
    <div className="w-[278px] h-[400px] bg-[#1C1B23] rounded-[26px] p-8 text-white relative">
      <div className="relative z-10 flex flex-col gap-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute top-0 left-0 w-[120px] h-[120px] bg-[#00B087] rounded-full opacity-20"></div>
          <Image
            src="/best-dest-card.png"
            alt="Explorer"
            width={180}
            height={180}
            className="relative z-10"
            priority
          />
        </div>

        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-semibold leading-tight">
            Let&apos;s Explore
            <br />
            the beauty
          </h3>
          <p className="text-sm text-gray-400">Get special offers & news</p>
        
        <button className="w-full bg-[#00B087] text-white py-4 rounded-xl font-medium text-base hover:bg-[#00C096] transition-colors">
          Join Now
        </button>
      </div>
        
        </div>

        

      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-[#00B087] rounded-full opacity-5"></div>
      <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-[#00B087] rounded-full opacity-5"></div>
    </div>
  )
}


