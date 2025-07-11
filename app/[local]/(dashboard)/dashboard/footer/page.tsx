"use client";

import { fetchFooter, updateFooter } from "@/app/lib/footer";
import { Footer } from "@/types/footer";
import { useEffect, useState } from "react";

const initialData: Footer = {
  email: "",
  address: {
    ar: "",
    en: "",
  },
  paragraph: {
    ar: "",
    en: "",
  },
};

export default function FooterDashboard() {
  const [form, setForm] = useState<Footer>(initialData);
  const [loading, setLoading] = useState(false);

  const handleChange = <K extends keyof Footer>(field: K, value: any) => {
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
          address: {
            ar: data.address?.ar || "",
            en: data.address?.en || "",
          },
          paragraph: {
            ar: data.paragraph?.ar || "",
            en: data.paragraph?.en || "",
          },
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">تحديث الفوتر</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">البريد الإلكتروني</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">العنوان (AR)</label>
          <input
            type="text"
            value={form.address.ar}
            onChange={(e) => setForm((prev) => ({ ...prev, address: { ...prev.address, ar: e.target.value } }))}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">العنوان (EN)</label>
          <input
            type="text"
            value={form.address.en}
            onChange={(e) => setForm((prev) => ({ ...prev, address: { ...prev.address, en: e.target.value } }))}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الفقرة (AR)</label>
          <textarea
            value={form.paragraph.ar}
            onChange={(e) => setForm((prev) => ({ ...prev, paragraph: { ...prev.paragraph, ar: e.target.value } }))}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            rows={4}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الفقرة (EN)</label>
          <textarea
            value={form.paragraph.en}
            onChange={(e) => setForm((prev) => ({ ...prev, paragraph: { ...prev.paragraph, en: e.target.value } }))}
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
