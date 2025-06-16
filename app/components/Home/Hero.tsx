import { fetchHeroSection } from "@/app/lib/home/hero";
import Link from "next/link";

export default async function Hero() {
  const HeroData = await fetchHeroSection();
  return (
    <section className="relative w-full h-screen overflow-hidden grid place-items-center ">
      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HeroData?.backgroundVideoUrl}
        autoPlay
        muted
        loop
        playsInline
      />

      <div
        className={`absolute inset-0 flex items-center justify-center md:justify-start`}
      >
        <div className=" bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-80 absolute inset-0" />
        <div className="container mx-20 z-10 max-w-3xl  justify-center md:justify-start">
          <h1 className="text-2xl  md:text-4xl  font-bold mb-4 bg-gradient-to-r from-[#BB8819] to-[#F1DD6E] bg-clip-text text-transparent">
            {HeroData?.title}
          </h1>
          <p className="text-sm md:text-xl mb-6 leading-8">
            {HeroData?.subtitle}
          </p>
          <Link
            href={HeroData?.ctaLink || "/"}
            className=" w-fit pb-20 relative"
            target="_blank"
          >
            <button
              className="btn-primary text-[#1979EB] w-fit pb-20 relative"
              style={{ color: "#1979EB !importent" }}
            >
              {HeroData?.ctaText}
            </button>
          </Link>
        </div>
      </div>

      {/* Optional: dark overlay over video */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}
