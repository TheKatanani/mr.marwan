import ArrowIcon from "@/app/icons/ArrowIcon";
import { Service } from "@/types/servece";
import React from "react";

function Hero(
  { headImage, headline, description }:
  Partial<Service> 
) {
  return (
    <section
      className=" relative bg-cover bg-center text-white py-32 px-6 not-last: h-screen grid place-items-center justify-start"
      style={{ backgroundImage: `url(${headImage})` }}
    >
      <div className=" bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-80 absolute inset-0" />
      <div className="container md:px-20 z-10 max-w-3xl mx-auto">
        <h1 className="text-2xl  md:text-4xl  font-bold mb-4 bg-gradient-to-r from-[#BB8819] to-[#F1DD6E] bg-clip-text text-transparent">&quot;{headline}&quot;</h1>
        <p className="text-xl mb-6">{description}</p>
        {/*  bg-[#FF4D03] */}
        <button className="btn-primary relative">
          شاهد الفيديو التعريفي
        <ArrowIcon className="absolute right-[50] bottom-[-250] "/> 
        </button>
      </div>
    </section>
  );
}

export default Hero;
