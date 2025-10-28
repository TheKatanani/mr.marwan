"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const helicopters = [
  {
    id: "r88",
    name: "R88",
    image: "/h1.webp",
    callouts: [
      { text: "2 + 8 Configuration", position: { x: "60%", y: "10%" } },
      { text: "Highly Configurable Interior", position: { x: "40%", y: "80%" } },
      { text: "Safran Arriel 2W engine", position: { x: "80%", y: "75%" } },
    ],
  },
  {
    id: "r44",
    name: "R44",
    image: "/h2.webp",
    callouts: [
      { text: "4 Seats", position: { x: "55%", y: "20%" } },
      { text: "Compact Design", position: { x: "35%", y: "70%" } },
      { text: "Lycoming Engine", position: { x: "85%", y: "55%" } },
    ],
  },
  {
    id: "r22",
    name: "R22",
    image: "/h3.webp",
    callouts: [
      { text: "2 Seats", position: { x: "55%", y: "25%" } },
      { text: "Lightweight", position: { x: "40%", y: "75%" } },
      { text: "Training Favorite", position: { x: "80%", y: "50%" } },
    ],
  },
];

export default function HelicopterCarousel() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTooltipToggle = (heliId: string, idx: number) => {
    const key = `${heliId}-${idx}`;
    setActiveTooltip((prev) => (prev === key ? null : key));
  };

  // Show loading state during SSR and initial client render
  if (!mounted) {
    return (
      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 md:py-20 flex items-center justify-center">
        <div className="absolute inset-0 text-[80px] sm:text-[110px] md:text-[148px] font-bold text-[#e6dccf] flex items-center justify-center opacity-40 z-0 pointer-events-none select-none">
          Marawan
        </div>
        <div className="relative z-10 h-[360px] flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 md:py-20 flex items-center justify-center">
      {/* Background Text */}
      <div className="absolute inset-0 text-[80px] sm:text-[110px] md:text-[148px] font-bold text-[#e6dccf] flex items-center justify-center opacity-40 z-0 pointer-events-none select-none">
        Marawan
      </div>

      <div className="relative z-10 w-full flex items-center justify-center">
        <Swiper
          slidesPerView={1}
          centeredSlides
          navigation
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 35 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          modules={[Navigation]}
          className="h-full flex items-center justify-center"
        >
          {helicopters.map((heli) => (
            <SwiperSlide key={heli.id} className="flex justify-center items-center relative">
              <div className="relative w-fit h-fit flex items-center justify-center group">
                <Image
                  src={heli.image}
                  alt={heli.name}
                  width={928}
                  height={522}
                  className="transition-all duration-1500 ease-linear max-h-[260px] sm:max-h-80 md:max-h-[380px] lg:max-h-[441px] min-h-[120px] object-contain mx-auto"
                />

                {heli.callouts.map((callout, idx) => {
                  const isActive = activeTooltip === `${heli.id}-${idx}`;
                  return (
                    <div
                      key={idx}
                      className="absolute"
                      style={{
                        left: callout.position.x,
                        top: callout.position.y,
                        transform: "translate(-50%, -50%)",
                        zIndex: 20,
                      }}
                    >
                      {/* Dot */}
                      <div
                        onClick={() => handleTooltipToggle(heli.id, idx)}
                        onMouseEnter={() => handleTooltipToggle(heli.id, idx)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full border-2 border-gray-200 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
                      />

                      {/* Tooltip */}
                      <div
                        className={`absolute left-1/2 top-full -translate-x-1/2 mt-2 sm:mt-3 bg-white text-blue-900 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-lg text-[10px] sm:text-xs font-semibold border border-blue-400 whitespace-nowrap z-30 pointer-events-none
                        ${isActive ? "opacity-100 visible" : "opacity-0 invisible"} 
                        transition-all duration-300`}
                      >
                        {callout.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}