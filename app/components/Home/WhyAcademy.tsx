import Image from "next/image";
import Container from "../Container";
import Title from "../Titile";
import { fetchWhyAcademy } from "@/app/lib/home/whyAcademy";
const WhyAcademy = async () => {
  const data = await fetchWhyAcademy();
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-r from-white via-[#e3f9ff] to-white  text-white py-16 min-h-screen grid place-items-center relative"
    >
      <Container className="pt-5 md:pt-0">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Text Section */}
          <div className="md:w-1/2   text-right px-4 pt-30 md:pt-0 ">
            <Title>{data?.title}</Title>
            <p className="text-lg pt-20 leading-8 text-gray-800">
              {data?.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center relative pt-30 md:pt-0  order-[-1] md:order-1">
            {/* Main Image */}
            <Image
              src={data?.imageUrl || "/about.jpg"}
              alt="academy"
              width={380}
              height={315}
              className="rounded-2xl shadow-lg relative z-[1]"
            />

            {/* Overlay Image */}
            <div className="absolute top-5 md:top-[-60px] right-[50px] z-0 w-[330px] h-[495px]">
              <Image
                src="/ideas.png"
                alt="academy background"
                fill
                sizes="(max-width: 768px) 100vw, 330px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default WhyAcademy;
