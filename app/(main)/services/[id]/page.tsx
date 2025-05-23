import { getService } from "@/app/lib/services";
import ServiceClientPage from "./ClientService";
import { Suspense } from "react";
import ServicesSkeleton from "@/app/components/ui/ServicesSkeleton"; 
type Props = {
  params: { id: string };
};
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const service = await getService(id);
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
export default async function ServicePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;  

  return (
    <Suspense fallback={<ServicesSkeleton />}>
      <ServiceClientPage id={id} />
    </Suspense>
  );
}
