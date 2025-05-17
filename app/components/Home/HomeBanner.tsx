/** @format */

import { fetchHomeBanner } from "@/app/lib/home/banner";
import Image from "next/image";
import Link from "next/link";

export default async function HomeBanner() {
  const bannerData = await fetchHomeBanner();
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bannerData?.backgroundImageUrl})`, 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-right">
          <h1 className="text-xl md:text-5xl font-bold mb-6 leading-tight text-pink-500">
            {bannerData?.title}
          </h1>
          <p className="text-lg text-gray-300 mb-6">{bannerData?.subtitle} </p>
          <Link href="/courses">
            <button className="btn-primary">{bannerData?.ctaText}</button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={bannerData?.bannerImageUrl || "/work-steps-1.png"} // PNG image of a person or logo
            alt="Dr. Marwan"
            width={400}
            height={400}
            className="w-auto h-auto max-w-xs md:max-w-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
