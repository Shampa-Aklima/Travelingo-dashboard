"use client";

import Image from "next/image";

interface ExploreCardProps {
  image: string;
  title: string;
}

export default function ExploreCard({
  title,
}: Omit<ExploreCardProps, "image">) {
  return (
    <div className="w-full md:w-[200px] h-[300px] md:h-[373px]
                    bg-[#1F2937] rounded-2xl overflow-hidden mx-auto">
      <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8 text-center">
        <div className="relative mb-2">
          <Image
            src="/best-dest-card.png"
            alt="Character"
            width={184}
            height={206}
            className="relative z-10 mx-auto"
          />
        </div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2
                        w-[100px] h-[100px] bg-[#17C58B] rounded-full"></div>
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">Get special offers & news</p>

        {/* Button */}
        <button className="w-full text-xs bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl transition-colors duration-200">
          Join Now
        </button>
      </div>
    </div>
  );
}
