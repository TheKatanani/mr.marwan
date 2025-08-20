import Image from "next/image";
import { LocalizedField } from "@/types";
import { getLocale } from "next-intl/server";

interface Props {
  data: {
    title: LocalizedField;
    description: LocalizedField;
  };
}

export default async function HeroService({ data }: Props) {
  const locale = await getLocale() as keyof LocalizedField;

  return (
    <section className="relative w-full h-120 overflow-hidden grid place-items-center">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        // src="/servicesHero.jpg" // Change to your image path
        src="/trainingHero.png" // Change to your image path
        alt="Services Hero"
        width={1920}
        height={1080}
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        {/* Gradient overlay */}
        <div className="bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-60 absolute inset-0" />

        <div className="container mx-20 z-10 max-w-3xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#BB8819] to-[#F1DD6E] bg-clip-text text-transparent">
            {data.title[locale]}
          </h1>
          <p className="text-md md:text-xl text-white leading-8 max-w-2xl">
            {data.description[locale]}
          </p>
        </div>
      </div>

      {/* Black dim layer */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}
