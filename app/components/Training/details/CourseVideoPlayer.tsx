"use client";

import { LocalizedField } from "@/types";
import { CourseVideoSection } from "@/types/course";
import { useLocale } from "next-intl"; 
import React from "react";

export default function CourseVideoPlayer({
  data,
}: {
  data: CourseVideoSection;
}) {
  const locale = useLocale() as keyof LocalizedField;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Video */}
        <div className="md:col-span-2 w-full h-full flex flex-col">
          <video
            className="aspect-video w-full overflow-hidden rounded-3xl shadow-lg border border-gray-200 bg-black"
            controls
            poster={"/trainingHero.png"}
          >
            <source
              src={data.video_url || "/animationLogo.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Course Content List */}
        <aside className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 h-fit">
          <h3 className="text-xl font-semibold mb-5 text-gray-900">
            Course Content
          </h3>
          <ul className="space-y-4">
            {data.content_list.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-base text-gray-700 group"
              >
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold group-hover:bg-blue-600 group-hover:text-white transition">
                  {idx + 1}
                </span>
                <span className="flex-1">{item[locale]}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
