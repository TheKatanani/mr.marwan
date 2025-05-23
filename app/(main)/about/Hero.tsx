import { AboutFormData } from "@/types/about";
import Container from "../../components/Container";

const Hero = ({ data }: { data: AboutFormData }) => {
  return (
    <section
      className=" bg-cover bg-center text-white py-32 h-screen flex place-items-center justify-start px-0 md:px-20"
      style={{ backgroundImage: `url(${data.hero.image || "/about.jpg"})` }}
    >
      <div className="bg-black opacity-70 absolute inset-0 z-10" />
      <div className="z-10 max-w-3xl p-10 md:px-0">
        <Container>
          <h1 className="text-4xl font-bold mb-4 text-pink-500">
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
