/** @format */

"use client";
import { fetchFooter, updateFooter } from "@/app/lib/footer";
import { Footer } from "@/types/footer";
import { useEffect, useState } from "react";

const initalData = {
  email: "",
  address: "",
  paragraph: "",
};
export default function page() {
  const [form, setForm] = useState<Footer>(initalData);

  const [loading, setLoading] = useState(false);

  const handleChange = <K extends keyof Footer>(field: K, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateFooter(form);
      alert("تم التحديث بنجاح");
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء التحديث");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFooter();
      if (data) {
        setForm({
          email: data.email || "",
          address: data.address || "",
          paragraph: data.paragraph || "",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">
        تحديث قسم "من نحن"
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">الايميل</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">العنوان</label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring" 
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">الفقرة</label>
          <textarea
            value={form.paragraph}
            onChange={(e) => handleChange("paragraph", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            rows={4}
          />
        </div>

        <button type="submit" disabled={loading} className="w-full btn-primary">
          {loading ? "جاري التحديث..." : "تحديث المعلومات"}
        </button>
      </form>
    </div>
  );
}
