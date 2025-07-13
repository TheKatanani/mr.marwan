"use client";

import { getJoinCommunityData } from "@/app/lib/home/joinCommunity";
import { LocalizedField } from "@/types";
import { JoinCommunityData } from "@/types/joinCommunity";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react"; 

export default function JoinCommunity() {
  const [data, setData] = useState<JoinCommunityData | null>(null);
  const locale = useLocale() as keyof LocalizedField
  useEffect(() => {
    getJoinCommunityData().then(setData);
  }, []);

  if (!data) return null;

  const {   title, subtitle, stats } = data.video_section;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={'/JoinCommunity.mp4'}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-evenly px-6 md:px-12 lg:px-20">
        <div>
          <p className="text-[#BB8819] font-semibold tracking-widest uppercase">
            {subtitle[locale]}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight max-w-[600px] text-white">
            {title[locale]}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 mt-10 justify-evenly text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-4xl font-extrabold text-[#BB8819]">{stat.value}</p>
              <p className="text-white uppercase tracking-wide font-semibold">
                {stat.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
