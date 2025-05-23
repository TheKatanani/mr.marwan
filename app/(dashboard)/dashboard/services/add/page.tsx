"use client";

import { addService } from "@/app/lib/services";
import { Service } from "@/types/servece";
import { useRouter } from "next/navigation";   
import ServiceForm from "../Form";
export default function AddServicePage() {
  const router = useRouter();

  const handleAdd = async (data: Service) => {
    try {
      await addService(data);
      router.push("/dashboard/services");
    } catch (error) {
      console.error("فشل في إضافة الخدمة", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">إضافة خدمة جديدة</h1>
      <ServiceForm onSubmit={handleAdd} />
    </div>
  );
}
