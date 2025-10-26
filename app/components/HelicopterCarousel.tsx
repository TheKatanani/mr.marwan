"use client";

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
      {
        text: "2 + 8 Configuration",
        position: { x: "60%", y: "10%" },
      },
      {
        text: "Highly Configurable Interior",
        position: { x: "40%", y: "80%" },
      },
      {
        text: "Safran Arriel 2W engine",
        position: { x: "80%", y: "75%" },
      },
    ],
  },
  {
    id: "r44",
    name: "R44",
    image: "/h2.webp",
    callouts: [
      {
        text: "4 Seats",
        position: { x: "55%", y: "20%" },
      },
      {
        text: "Compact Design",
        position: { x: "35%", y: "70%" },
      },
      {
        text: "Lycoming Engine",
        position: { x: "85%", y: "55%" },
      },
    ],
  },
  {
    id: "r22",
    name: "R22",
    image: "/h3.webp",
    callouts: [
      {
        text: "2 Seats",
        position: { x: "55%", y: "25%" },
      },
      {
        text: "Lightweight",
        position: { x: "40%", y: "75%" },
      },
      {
        text: "Training Favorite",
        position: { x: "80%", y: "50%" },
      },
    ],
  },
];

export default function HelicopterCarousel() {
  return (
    <section className="relative w-full mt-16 overflow-hidden bg-[#fff] py-20 flex items-center justify-center">
      <div className="absolute inset-0 text-[148px] font-bold text-[#e6dccf] flex items-center justify-center opacity-40 z-0 pointer-events-none">
        Marawan
      </div>

      <div className="relative z-10 w-full flex items-center justify-center">
        <Swiper
          slidesPerView={3}
          centeredSlides
          navigation
          spaceBetween={30}
          modules={[Navigation]}
          className="h-[322px] flex items-center justify-center"
        >
          {helicopters.map((heli) => (
            <SwiperSlide
              key={heli.id}
              className="flex justify-center items-center relative"
            >
              <div className="relative w-fit h-fit flex items-center justify-center group">
                <Image
                  src={heli.image}
                  alt={heli.name}
                  width={928}
                  height={522}
                  className="transition-all duration-[1500ms] ease-linear max-h-[441px] min-h-[129px] object-contain mx-auto"
                />

                {heli.callouts.map((callout, idx) => (
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
                    <div className="w-4 h-4 bg-blue-400 rounded-full border-2 border-gray-200 shadow-lg cursor-pointer transition-transform duration-200 group-hover:scale-110" />

                    {/* Callout Text */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2 top-full -translate-x-1/2 mt-3 bg-white text-blue-900 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold border border-blue-400 whitespace-nowrap z-30">
                      {callout.text}
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
