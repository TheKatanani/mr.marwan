/** @format */

"use client";
import Title from "@/app/components/Titile";
import VideoPlayer from "@/app/components/VideoPlayer";
import type { Gallery } from "@/types/servece";
import Image from "next/image";
import React, { useState, useEffect } from "react";
type Show = "videos" | "images";

function Gallery({ gallery }: { gallery: Gallery }) {
  const [show, setShow] = useState<Show>("images");
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const imagesLength = gallery.images.length;

  useEffect(() => {
    // Reset loading states when switching tabs
    setLoading(true);
    setLoadedCount(0);
  }, [show]);

  const handleImageLoad = () => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      if (newCount === imagesLength) {
        setLoading(false);
      }
      return newCount;
    });
  };

  return (
    <section className="px-4 py-16 pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Title className="mb-12 pb-10 m-auto w-fit">المعرض</Title>

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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center items-center">
          {show === "images" &&
            gallery.images.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full h-40 md:h-72 rounded-2xl overflow-hidden"
              >
                {/* Skeleton layer */}
                {loadedCount <= idx && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-2xl z-0" />
                )}

                {/* Real image */}
                <Image
                  src={src}
                  onError={(e) => (e.currentTarget.src = "/test2.jpg")}
                  onLoad={handleImageLoad}
                  alt={`Gallery image ${idx}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-2xl z-10 relative"
                />
              </div>
            ))}

          {show === "videos" &&
            gallery?.videos?.map((src, idx) => (
              <div key={idx}>
                <VideoPlayer src={src} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
