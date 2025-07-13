/** @format */

import { getService } from "@/app/lib/services";
import dynamic from "next/dynamic";
import Partners from "@/app/components/Partners";

// Dynamic/lazy imports
const Hero = dynamic(() => import("@/app/components/HeroImage"));
const Features = dynamic(() => import("./Features"));
const Subscriptions = dynamic(() => import("./Subscriptions"));
const Gallery = dynamic(() => import("./Gallery"));
const VideoPlayer = dynamic(() => import("@/app/components/VideoPlayer"));
const ClientReviews = dynamic(() => import("@/app/components/clientReviews"));

type Props = {
  id: string;
};

export default async function ServiceClientPage({ id }: Props) {
  const service = await getService(id);

  if (!service) return null; // handle missing service

  return (
    <div className="flex flex-col text-gray-800 min-h-screen">
      <Hero
        headline={service.headline}
        description={service.description}
        headImage={service.headImage}
      />

      <section className="max-w-4xl mx-auto px-4 min-h-screen grid place-items-center">
        <VideoPlayer src={service.videoUrl} />
      </section>

      <Features
        features={service.features}
        featuresImage={service.featuresImage}
      />

      <Subscriptions subscriptions={service.subscriptions} />

      <Gallery gallery={service.gallery} />
      <ClientReviews reviews={service.reviews} />
      <Partners data={service.partners} />
    </div>
  );
}
