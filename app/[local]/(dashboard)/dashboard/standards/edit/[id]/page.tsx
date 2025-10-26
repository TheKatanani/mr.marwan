import EditStandardPageClient from "@/app/components/standards/EditStandardPageClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

 export default async function EditStandardPage({ params }: PageProps) {
  const { id } = await params;
   return <EditStandardPageClient id={id} />;
}