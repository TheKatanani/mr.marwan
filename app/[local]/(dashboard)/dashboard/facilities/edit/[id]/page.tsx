"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter, useParams, notFound } from "next/navigation";
import { fetchFacility, updateFacility } from "@/app/lib/facilities";
import ImageCard from "@/app/components/ImageCard";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";

export default function EditFacilityPage() {
  const { id } = useParams()!;
  const router = useRouter();
  const facilityId = Array.isArray(id) ? id[0] : id;

  const [form, setForm] = useState({
    titleAr: "",
    titleEn: "",
    descAr: "",
    descEn: "",
    image: "",
  });

  const { uploadMedia, uploading: isUploading } = useCloudinaryUploader();

  // 🧠 Fetch Facility Data
  useEffect(() => {
    if (!facilityId) {
      notFound();
      return;
    }

    let isActive = true;

    const loadFacility = async () => {
      const data = await fetchFacility(facilityId);
      if (!data) {
        notFound();
        return;
      }

      if (isActive) {
        setForm({
          titleAr: data.title?.ar || "",
          titleEn: data.title?.en || "",
          descAr: data.description?.ar || "",
          descEn: data.description?.en || "",
          image: data.image || "",
        });
      }
    };

    loadFacility();

    return () => {
      isActive = false;
    };
  }, [facilityId]);

  // ✅ Fix: Only render "not found" after hooks
  if (!facilityId) {
    return notFound();
  }

  // 🧩 Handle Image Upload
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadMedia(file);
    if (url) setForm((prev) => ({ ...prev, image: url }));
  };

  // 📝 Handle Input Change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // 🚀 Handle Submit
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await updateFacility(facilityId, {
      title: { ar: form.titleAr, en: form.titleEn },
      description: { ar: form.descAr, en: form.descEn },
      image: form.image,
    });

    router.push("/dashboard/facilities");
  };

  // 🧩 UI
  return (
    <form
      onSubmit={submit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-4 text-gray-800"
    >
      <h1 className="text-xl font-bold text-center">تعديل المنشأة</h1>

      {["title", "desc"].map((field) => (
        <div key={field} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">
              {field === "title" ? "العنوان (AR)" : "الوصف (AR)"}
            </label>
            {field === "title" ? (
              <input
                name="titleAr"
                value={form.titleAr}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            ) : (
              <textarea
                name="descAr"
                value={form.descAr}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border px-3 py-2 rounded"
              />
            )}
          </div>

          <div>
            <label className="block mb-1">
              {field === "title" ? "Title (EN)" : "Description (EN)"}
            </label>
            {field === "title" ? (
              <input
                name="titleEn"
                value={form.titleEn}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            ) : (
              <textarea
                name="descEn"
                value={form.descEn}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border px-3 py-2 rounded"
              />
            )}
          </div>
        </div>
      ))}

      <ImageCard
        imageUrl={form.image}
        uploading={isUploading}
        onUpload={handleUpload}
        onDelete={
          form.image
            ? () => setForm((prev) => ({ ...prev, image: "" }))
            : undefined
        }
        uploadId="facilityImageUpload"
      />

      <button
        type="submit"
        className="btn-primary w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        تحديث المنشأة
      </button>
    </form>
  );
}
