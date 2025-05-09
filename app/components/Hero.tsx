"use client";

import { About } from "@/types/about";
import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function Hero({video : videoUrl}:{video:string}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);

    video.addEventListener("play", handlePlay);

    return () => {
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden grid place-items-center ">
      {/* Video */}
      <VideoPlayer
        // ref={videoRef}
        // className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        // autoPlay
        // muted
        // loop
        // playsInline
      />

      {/* Overlay
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          مرحبًا بكم في عالم النجاح الرقمي
        </h1>
      </div> */}

      {/* Optional: dark overlay over video */}
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
    </section>
  );
}
