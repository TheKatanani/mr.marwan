"use client";

import Link from "next/link";
import { deleteService, getServices } from "@/app/lib/services";
import { useEffect, useState } from "react";
import { Service } from "@/types/servece"; 
import ServicesSkeleton from "@/app/components/ui/ServicesSkeleton";

export default function ServicesPage() {
  const [services, setServices] = useState<Partial<Service>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("هل أنت متأكد من حذف هذه الخدمة؟");
    if (confirmDelete) {
      try {
        await deleteService(id);
        setServices((prev) => prev.filter((service) => service.id !== id));
      } catch (error) {
        console.error("Error deleting service:", error);
        alert("حدث خطأ أثناء حذف الخدمة");
      }
    }
  };

  if (isLoading) return <ServicesSkeleton />;

  return (
    <div className="p-6 bg-white rounded-xl shadow text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">الخدمات</h1>
        <Link
          href="/dashboard/services/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + إضافة خدمة جديدة
        </Link>
      </div>

      {services.length === 0 ? (
        <p className="text-gray-600">لا توجد خدمات حالياً.</p>
      ) : (
        <table className="w-full border text-right">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">العنوان</th>
              <th className="p-2 border">الوصف</th>
              <th className="p-2 border">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b hover:bg-gray-50">
                <td className="p-2 border">{service.headline}</td>
                <td className="p-2 border">
                  {service.description
                    ? service.description.slice(0, 50) + "..."
                    : "—"}
                </td>
                <td className="p-2 border">
                  <div className="flex flex-row-reverse gap-4">
                    <Link
                      href={`/dashboard/services/${service.id}/edit`}
                      className="text-blue-600 hover:underline"
                    >
                      تعديل
                    </Link>
                    <button
                      type="button"
                      className="text-red-600 hover:underline"
                      onClick={() => service.id && handleDelete(service.id)}
                    >
                      حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
