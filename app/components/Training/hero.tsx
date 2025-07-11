import Image from "next/image";  
import { LocalizedField } from "@/types";
import { getLocale } from "next-intl/server";

interface Props {
  data: {
    title: LocalizedField;
    description: LocalizedField;
  };
}

export default async function HeroTraining({ data }: Props) {
  const locale =await getLocale() as keyof LocalizedField;

  return (
    <section className="relative w-full h-120 overflow-hidden grid place-items-center">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/trainingHero.png"
        alt="Hero img"
        width={1920}
        height={1080}
      />

      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-65 absolute inset-0" />
        <div className="container mx-20 z-10 max-w-3xl justify-center md:justify-start">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#BB8819] to-[#F1DD6E] bg-clip-text text-transparent">
            {data.title[locale]}
          </h1>
          <p className="text-sm md:text-xl mb-6 max-w-2xl leading-8 text-white">
            {data.description[locale]}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}
