/** @format */

"use client";
import Titile from "@/app/components/Titile";
import VideoPlayer from "@/app/components/VideoPlayer";
import type { Gallery } from "@/types/servece";
import Image from "next/image";
import React, { useState } from "react";
type Show = "videos" | "images";
function Gallery({ gallery }: { gallery: Gallery }) {
  const [show, setShow] = useState<Show>("images");

  return (
    <section className="px-4 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Titile className="mb-12 pb-10 m-auto w-fit">Gallery</Titile>
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={show === "images" ? "btn-primary" : "cursor-pointer"}
            onClick={() => setShow("images")}
          >
            صور
          </button>
          <button
            className={show === "videos" ? "btn-primary" : "cursor-pointer"}
            onClick={() => setShow("videos")}
          >
            فيديوهات
          </button>
        </div>
        {/* TODO: Add tabs toggle logic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center items-center">
          {show === "images" &&
            // gallery?.images?
            gallery.images.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                onError={(e) => (e.currentTarget.src = '/test2.jpg')} // Fallback on error
                alt={`Gallery image ${idx}`}
                width={300}
                height={300}
                className="rounded-2xl  w-full h-[160] md:h-[300] bg-contain m-auto object-cover shadow-sm"
              />
            ))}
          {show === "videos" &&
            gallery?.videos?.map((src, idx) => (
              <VideoPlayer src={src} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
