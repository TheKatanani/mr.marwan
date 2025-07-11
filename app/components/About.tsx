/** @format */

import Image from "next/image";
import Container from "./Container";
import Title from "./Titile";   
import type { About } from "@/types/aboutHome";
const About = async ({ aboutData }: { aboutData: About }) => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-r from-white via-[#e3f9ff] to-white  text-white py-16 min-h-screen grid place-items-center relative"
    >
      <Container className="pt-5 md:pt-0">
        <Title>{aboutData.title.en}</Title>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col space-y-6 text-right px-4 pt-30 md:pt-0 ">
            <p className="text-lg leading-8 text-gray-800">
              {aboutData.description.en}
            </p> 
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center relative pt-30 md:pt-0  order-[-1] md:order-1">
            <Image
              src={aboutData.aboutImage || "/about.jpg"}
              alt="About us"
              width={380}
              height={315}
              className="rounded-2xl shadow-lg"
              style={{ zIndex: 1 }}
            />
            <Image
              src="/ideas.png"
              alt="About us"
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

export default About;
