"use client";

import Image from "next/image";

interface ExploreCardProps {
  title: string;
}

export default function ExploreCard({
  title,
}: ExploreCardProps) {
  return (
    <div className="w-full md:w-[200px] h-[250px] md:h-[373px]
                    bg-[#1F2937] rounded-2xl overflow-hidden mx-auto">
      <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-8 text-center">
        <div className="relative mb-2">
          <Image
            src="/best-dest-card.png"
            alt="Character"
            width={140}
            height={160}
            className="relative z-10 mx-auto md:w-[184px] md:h-[206px]"
          />
        </div>
        <div className="absolute top-12 md:top-20 left-1/2 transform -translate-x-1/2
                        w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-[#17C58B] rounded-full"></div>
        {/* Content */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{title}</h3>
        <p className="text-xs md:text-sm text-gray-300 mb-2">Get special offers & news</p>

        {/* Button */}
        <button className="w-full text-xs bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl transition-colors duration-200">
          Join Now
        </button>
      </div>
    </div>
  );
}
