/** @format */

import React from "react";
import Title from "./Titile";
import Link from "next/link";
import Image from "next/image";
import { Partner } from "@/types/servece";
import { getTranslations } from "next-intl/server";

async function Partners({ data }: { data: Partner[] }) {
  const t = await getTranslations("partners");
  return (
    <section className="py-16  bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <Title className="pb-10 m-auto w-fit">{t("title")}</Title>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {data?.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white  h-[150px] aspect-[1/1] grid place-content-center"
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
                    className="object-contain h-25 w-auto"
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
