/** @format */

import { Service } from "@/types/servece";
import React from "react";
import Image from "next/image";
import Title from "@/app/components/Titile";

function Features({ features, featuresImage }: Partial<Service>) {
  return (
    <section className="bg-white py-12  px-6 lg:px-8" dir="rtl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text and List Section */}
        <div>
          <Title className="text-lg sm:text-xl pb-8 sm:pb-10">
            ميزات الخدمة 
          </Title>

          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            {features?.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Image
                  src="/smallLogoMarwan.PNG"
                  alt="icon"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="btn-primary mt-8 sm:mt-10 text-sm sm:text-base">
            اشترك الآن
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
          {/* Green background layer */}
          <div className="absolute bg-blue-200 rounded-[2rem] -top-5 -left-5 right-2.5 bottom-2.5 z-0 rounded-tr-none rounded-bl-none" />

          {/* Image wrapper with matching clipping */}
          <div className="overflow-hidden rounded-[1.8rem] rounded-tr-none rounded-bl-none relative z-10">
            <Image
              src={featuresImage || "/camera.png"}
              alt="Camera Visual"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
