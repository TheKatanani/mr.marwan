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
      className="w-full bg-gradient-to-r from-white via-[#e3f9ff] to-white  text-white py-16 min-h-screen grid place-items-center relative"
    >
      <Container className="pt-5 md:pt-0">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Text Section */}
          <div className="md:w-1/2   text-right px-4 pt-30 md:pt-0 ">
            <Title>{section2.title[locale as keyof LocalizedField]}</Title>
            <p className="text-lg pt-20 leading-8 text-gray-800">
              {section2.description[locale as keyof LocalizedField]}
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center relative pt-30 md:pt-0  order-[-1] md:order-1 px-5 md:px-0">
            <Image
              src={section2.image || "/about.jpg"}
              alt="acadimy"
              width={380}
              height={315}
              className="rounded-2xl shadow-lg"
              style={{ zIndex: 1 }}
            />
            <Image
              src="/ideas.png"
              alt="acadimy"
              width={330}
              height={495}
              className="absolute z-0 top-5  md:top-[-60px] right-[50px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SectionTwo;
