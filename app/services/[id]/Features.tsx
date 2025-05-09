/** @format */

import Titile from "@/app/components/Titile";
import { Service } from "@/types/servece";
import React from "react";

function Features({ features }: Partial<Service>) {
  return (
    <section className="bg-gray-100 py-16 px-4 h-[80vh] grid place-content-center" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <Titile className="mb-12 pb-10 m-auto w-fit">
          المشاكل التي نحلها
        </Titile>
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features?.map((feature, idx) => (
            <li
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border border-gray-200 flex items-start gap-3"
            >
              ✔️
              <span className="text-gray-700 leading-relaxed font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
