import Image from "next/image";
import { Globe } from "lucide-react";
import { LocalizedField } from "@/types";
import { getLocale } from "next-intl/server";
import type { About } from "@/types/aboutHome";
import { getAboutData } from "@/app/lib/home/aboutHome";
 

export default async function About() {
  const locale = (await getLocale()) as keyof LocalizedField;
  const data: About = await getAboutData() 
  return (
    <section className="  bg-gray-50 ">
      <div className="flex bg-gray-50 flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto py-16 px-4">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center gap-3 text-blue-600">
            <Globe size={28} />
            <div>
              <h2 className="text-xl font-semibold text-black">
                {data.title[locale]}
              </h2>
              <p className="text-sm text-gray-600">{data.subTitle?.[locale]}</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {data.description[locale]}
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative">
          <Image
            src={data.aboutImage || "/trainingAbout.jpg"}
            alt="About Image"
            width={512}
            height={300}
            className="rounded-lg shadow-md w-[600px] object-cover h-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
