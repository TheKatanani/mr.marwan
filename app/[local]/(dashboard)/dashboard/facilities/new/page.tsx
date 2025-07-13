"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addFacility } from "@/app/lib/facilities";
import ImageCard from "@/app/components/ImageCard";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";

export default function NewFacilityPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    titleAr: "",
    titleEn: "",
    descAr: "",
    descEn: "",
    image: "",
  });
  const { uploadMedia, uploading: isUploading } = useCloudinaryUploader();
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadMedia(file);
    if (url)
      setForm((prev) => ({
        ...prev,
        image: url,
      }));
  };
  const handle = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e: any) => {
    e.preventDefault();
    await addFacility({
      title: { ar: form.titleAr, en: form.titleEn },
      description: { ar: form.descAr, en: form.descEn },
      image: form.image,
    });
    router.push("/dashboard/facilities");
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-4 text-gray-800" 
    >
      <h1 className="text-xl font-bold text-center">إضافة منشأة جديدة</h1>
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
                onChange={handle}
                required
                className="w-full border px-3 py-2"
              />
            ) : (
              <textarea
                name="descAr"
                value={form.descAr}
                onChange={handle}
                rows={3}
                required
                className="w-full border px-3 py-2"
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
                onChange={handle}
                required
                className="w-full border px-3 py-2"
              />
            ) : (
              <textarea
                name="descEn"
                value={form.descEn}
                onChange={handle}
                rows={3}
                required
                className="w-full border px-3 py-2"
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
            ? () =>
                setForm({
                  ...form,
                  image: "",
                })
            : undefined
        }
        uploadId="section2ImageUpload"
      />
      <button type="submit" className="btn-primary w-full">
        حفظ المنشأة
      </button>
    </form>
  );
}
