import { ArrowRight, GraduationCap, Info, Phone } from "lucide-react";
import React from "react";
import Image from "next/image";
import { CourseHero } from "@/types/course";
import { getLocale } from "next-intl/server";
import { LocalizedField } from "@/types";

export default async function Hero({ data }: { data: CourseHero }) {
  const locale = (await getLocale()) as keyof LocalizedField;
  return (
    <section className=" relative w-full h-150 overflow-hidden grid place-items-center ">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={data?.image || "/courseDetails.png"}
        alt="Hero img"
        width={1920}
        height={1080}
      />

      {/* Overlay gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-600/70 to-blue-400/60 pointer-events-none" /> */}
      <div className=" bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-65 absolute inset-0" />
      <div className="container mx-auto px-2 md:px-10 absolute inset-0 flex flex-col items-start justify-center z-10 ">
        {/* Breadcrumb & Title */}
        <div className="relative flex flex-col items-center mb-2 mt-10 z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-2xl text-blue-900 bg-white/80 font-semibold px-4 py-1 shadow">
              Course Details
            </span>
            <ArrowRight className="text-white w-5 h-5" />
            <span className="text-white/90 text-sm md:text-base font-medium">
              {data.title[locale]}
            </span>
          </div>
        </div>
        <div className="relative">
          {/* <span className="bg-gradient-to-br w-[184] h-[165] from-[#e3f9ff] to-white rounded-full absolute top-[-80] right-[-90] z-0"></span> */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#BB8819] to-[#F1DD6E] bg-clip-text text-transparent z-1 relative ">
            {data.title[locale]}
          </h2>
          <p className="text-white text-lg w-lg py-5">
            {data.description[locale]}
          </p>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center z-10">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold py-3 px-7 rounded-lg flex items-center gap-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300">
            <GraduationCap className="w-5 h-5" />
            Enroll Now
          </button>
          <button className="border border-white/80 hover:bg-white hover:text-blue-700 text-white font-semibold py-3 px-7 rounded-lg flex items-center gap-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <Info className="w-5 h-5" />
            Request More Info
          </button>
        </div>
      </div>
    </section>
  );
}
