/** @format */

import { AboutFormData } from "@/types/about";
import Container from "@/app/components/Container";
import Title from "@/app/components/Titile";
import Image from "next/image";
import { LocalizedField } from "@/types";
import { getLocale } from "next-intl/server";

const SectionTwo = async ({ data: { section2 } }: { data: AboutFormData }) => {
  const locale = await getLocale();

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-r from-white via-[#e3f9ff] to-white py-16 text-gray-800 relative"
    >
      <Container className="pt-5 md:pt-0">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-right">
            <Title>{section2.title[locale as keyof LocalizedField]}</Title>
            <p className="text-base sm:text-lg mt-6 sm:mt-8 leading-7 sm:leading-8 text-gray-800">
              {section2.description[locale as keyof LocalizedField]}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mb-6 md:mb-0">
            <Image
              src={section2.image || "/about.jpg"}
              alt="academy"
              width={380}
              height={315}
              className="rounded-2xl shadow-lg"
              style={{ zIndex: 1 }}
            />
            {/* <Image
              src="/ideas.png"
              alt="academy"
              width={330}
              height={495}
              className="absolute top-0 md:top-[-60px] right-0 md:right-[50px] z-0"
            /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTwo;
