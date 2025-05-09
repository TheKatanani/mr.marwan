// app/services/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { getService } from "@/app/lib/services";
import ClientReviews from "@/app/components/clientReviews";
import VideoPlayer from "@/app/components/VideoPlayer";
import Subscriptions from "./Subscriptions";
import Hero from "./Hero";
import Features from "./Features";
import Titile from "@/app/components/Titile";
import Gallery from "./Gallery";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const service = await getService(params.id);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.headline,
    description: service.description,
    openGraph: {
      title: service.headline,
      description: service.description,
      images: [
        {
          url: service.headImage,
          width: 800,
          height: 600,
          alt: service.headline,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = await getService(params.id);
  if (!service) return notFound();

  return (
    <div className="flex flex-col gap-16 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <Hero
        {...{
          description: service.description,
          headImage: service.headImage,
          headline: service.headline,
        }}
      />

      {/* Video Section */}
      <section className="max-w-4xl mx-auto px-4">
        <VideoPlayer src={service.videoUrl} />
      </section>

      {/* Features Section */}
      <Features features={service.features} />

      {/* Packages Section */}
      <div className="container md:px-20">
        <Subscriptions subscriptions={service.subscriptions} />
      </div>

      {/* Gallery Section */}
      <Gallery gallery={service.gallery} />

      {/* Customer Reviews */}
      <ClientReviews reviews={service.reviews} />

      {/* Sponsors Logos */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <Titile className="mb-12 pb-10 m-auto w-fit">Our Partners</Titile>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {service.partners?.map((logo, idx) => (
              <div
                key={idx}
                className="p-5 border-2 rounded-[50px] rounded-tl-none w-[150px] h-[150px] grid place-content-center"
              >
                <Image
                  src={logo}
                  alt={`Partner ${idx}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
