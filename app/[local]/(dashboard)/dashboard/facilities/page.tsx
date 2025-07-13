'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchFacilities, deleteFacility } from "@/app/lib/facilities";
import { Facility } from "@/types";

export default function FacilitiesDashboard() {
  const [items, setItems] = useState<Facility[]>([]);
  useEffect(() => { fetchFacilities().then(setItems); }, []);

  const handleDelete = async (id: string) => {
    if (confirm("هل أنت متأكد؟")) {
      await deleteFacility(id);
      setItems(items.filter(f => f.id !== id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 text-gray-800">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">إدارة المرافق</h1>
        <Link href="/dashboard/facilities/new" className="btn-primary">+ إضافة منشأة</Link>
      </div>
      <div className="grid gap-4">
        {items.map(f => (
          <div key={f.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <span>{f.title.ar} / {f.title.en}</span>
            <div className="flex gap-4">
              <Link href={`/dashboard/facilities/edit/${f.id}`} className="text-blue-600">تعديل</Link>
              <button onClick={() => handleDelete(f.id)} className="text-red-600">حذف</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
