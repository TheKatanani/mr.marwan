import { AboutFormData } from "@/types/about";
import Container from "../../components/Container";

const Hero = ({ data }: { data: AboutFormData }) => {
  return (
    <section
      className=" bg-cover bg-center text-white py-32 h-screen flex place-items-center justify-start px-0 md:px-20"
      style={{ backgroundImage: `url(${data.hero.image || "/about.jpg"})` }}
    >
      <div className="bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-80 absolute inset-0 z-10" />
      <div className="z-10 max-w-3xl p-10 md:px-0">
        <Container>
          <h1 className="text-2xl  md:text-4xl  font-bold mb-4 bg-gradient-to-r from-[#BB8819] to-[#F1DD6E] bg-clip-text text-transparent">
            {data.hero.title}
          </h1>
          <p className="text-xl mb-6 leading-10 ">{data.hero.description}</p>
          {data.hero.ctaText && (
            <a
              href={data.hero.ctaLink}
              className="btn-primary w-fit pb-20 relative"
            >
              {data.hero.ctaText}
            </a>
          )}
        </Container>
      </div>
    </section>
  );
};
export default Hero;
