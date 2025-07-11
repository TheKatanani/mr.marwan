"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MilestonesData } from "@/types/milestones"; // adjust the path to match your project
import { getMilestonesData } from "@/app/lib/home/milestones"; // adjust path
import { useLocale } from "next-intl";
import { LocalizedField } from "@/types";

function getCountdown(targetDateStr: string) {
  const now = new Date();
  const targetDate = new Date(targetDateStr);
  const diff = targetDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function Milestones() {
  const [data, setData] = useState<MilestonesData | null>(null);
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const locale = useLocale() as keyof LocalizedField;
  useEffect(() => {
    (async () => {
      const fetched = await getMilestonesData();
      setData(fetched);

      const countdownMilestone = fetched.milestones.find((m) => m.countdown);
      if (countdownMilestone) {
        setCountdown(getCountdown(countdownMilestone.date));
        const timer = setInterval(() => {
          setCountdown(getCountdown(countdownMilestone.date));
        }, 1000);
        return () => clearInterval(timer);
      }
    })();
  }, []);

  if (!data) return null;

  return (
    <section className="relative text-white py-20 px-6 md:px-20 overflow-hidden" dir="ltr">
      {/* Background Image */}
      <Image
        src={data.backgroundImage}
        alt="Milestones Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side */}
        <div className="md:w-1/2">
          <p className="text-[#BB8819] font-semibold tracking-widest uppercase">
            {data.subtitle[locale]}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-snug">
            {data.title[locale]}
          </h2>
        </div>

        {/* Timeline */}
        <div className="md:w-1/2 relative pl-8 mt-30 ms-30">
          <div className="absolute left-[37px] top-2 h-[240] border-l-4 border-white/40
          before:absolute before:left-[-3px] before:top-[-40px] before:w-[3px] before:h-[60px] before:bg-gradient-to-b before:from-transparent before:via-white/40 before:to-white/10
          after:absolute after:left-[-3px] after:top-[220px] after:w-[3px] after:h-[60px] after:bg-gradient-to-b after:from-transparent after:via-white/40 after:to-white/10
          " />

          {data.milestones.map((milestone, index) => (
            <div key={index} className="relative mb-12 pl-6"> 
              <div
                className={`absolute left-0 top-1 w-4 h-4 ${
                  milestone.countdown ? "bg-[#BB8819]" : "bg-white"
                } rounded-full border-2 border-black`}
              />
              <p className={`font-semibold text-sm ${milestone.countdown ? "text-[#BB8819]" : "text-gray-400"}`}>
                {new Date(milestone.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h3 className="text-xl font-bold mt-1">{milestone.label[locale]}</h3>

              {milestone.countdown && countdown && (
                <div className="mt-2 font-mono text-sm text-gray-300 tracking-wider">
                  {countdown.days}d&nbsp;&nbsp;
                  {String(countdown.hours).padStart(2, "0")}h&nbsp;&nbsp;
                  {String(countdown.minutes).padStart(2, "0")}m&nbsp;&nbsp;
                  {String(countdown.seconds).padStart(2, "0")}s
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
