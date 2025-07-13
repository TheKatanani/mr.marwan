/** @format */

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Service } from "@/types/servece";
import { getService, updateService } from "@/app/lib/services";
import Title from "@/app/components/Titile";
import ServiceForm from "../../Form";
const EditServicePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [serviceData, setServiceData] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      const service = await getService(id as string);
      setServiceData(service);
      setLoading(false);
    };

    fetchServiceData();
  }, [id]);

  const handleSubmit = async (data: Service) => {
    await updateService(id as string, data);
    router.push("/services"); // Redirect to the services page after updating
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Title className="text-2xl font-semibold mb-8">Edit Service</Title>
      {serviceData && (
        <ServiceForm onSubmit={handleSubmit} initialData={serviceData} />
      )}
    </div>
  );
};

export default EditServicePage;
