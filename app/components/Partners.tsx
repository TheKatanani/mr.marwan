/** @format */

import React from "react";
import Title from "./Titile";
import Link from "next/link";
import Image from "next/image";
import { Partner } from "@/types/servece";

function Partners({ data }: { data: Partner[] }) {
  return (
    <section className="py-16 min-h-120 bg-gradient-to-r from-white via-[#e3f9ff] to-white px-4">
      <div className="max-w-6xl mx-auto">
        <Title className="mb-12 pb-10 m-auto w-fit">شركائنا</Title>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {data?.map((item, idx) => (
            <div
              key={idx}
              className="p-5 border-2 border-[#BB8819] rounded-[50px] rounded-tl-none  h-[150px] grid place-content-center"
            >
              {item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={item.logo || "/about.jpg"}
                    alt={`Partner ${idx}`}
                    width={120}
                    height={60} 
                    className="object-contain h-auto w-auto"
                  />
                </Link>
              ) : (
                <Image
                  src={item.logo || "/about.jpg"}
                  alt={`Partner ${idx}`}
                  width={120}
                  height={60} 
                  className="object-contain h-auto w-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
