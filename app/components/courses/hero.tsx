import { Plane } from "lucide-react";
import React from "react";
import Image from "next/image";
import { FaCertificate, FaTeamspeak } from "react-icons/fa";

export default function Hero() {
  return (
    <section className=" relative w-full h-120 overflow-hidden grid place-items-center ">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={"/courses.png"}
        alt="Hero img"
        width={1920}
        height={1080}
      />
      {/* Overlay gradient */}
      <div className=" bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-65 absolute inset-0" />{" "}
      <div className="container mx-auto px-2 md:px-10 absolute inset-0 flex flex-col items-start justify-center z-10 ">
        <div className="relative">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#BB8819] to-[#F1DD6E] bg-clip-text text-transparent z-1 relative ">
            Explore Our Courses
          </h2>
          <p className="text-white text-lg w-lg py-5">
            Take your first step toward the sky with our comprehensive flight
            training programs
          </p>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center z-10">
          <div className="flex justify-center items-center gap-2">
            <FaCertificate />
            <p>FAA Certified</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaTeamspeak />
            <p>Expert Instructors</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Plane />
            <p>Modern Fleet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
