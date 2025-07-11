"use client";

import { useEffect, useState } from "react";
import type { BookSectionData } from "@/types/home"; 
import { fetchBookSection, updateBookSection } from "@/app/lib/home/book";
import ImageCard from "@/app/components/ImageCard";
import { useImageUpload } from "@/app/hooks/useImageUpload";

export default function EbookSectionForm() {
  const [form, setForm] = useState<BookSectionData>({
    title: "",
    description: "",
    ctaText: "",
    ctaLink: "",
    image: "",
    features: {
      forWhom: { title: "", description: "" },
      goals: { title: "", description: "" },
      about: { title: "", description: "" },
    },
  });

  const { imageUrl, isUploading, uploadError, handleUpload, handleRemove } =
    useImageUpload({
      getImageUrl: () => form.image,
      setImageUrl: (url) => handleChange("image", url),
    });
  const [loading, setLoading] = useState(false);

  const handleChange = <K extends keyof BookSectionData>(
    field: K,
    value: BookSectionData[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (
    key: keyof BookSectionData["features"],
    field: keyof BookSectionData["features"]["forWhom"],
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      features: {
        ...prev.features,
        [key]: {
          ...prev.features[key],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateBookSection(form);
      alert("تم تحديث قسم الكتاب الإلكتروني بنجاح");
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء التحديث");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBookSection();
      if (data) setForm(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">
        تحديث قسم الكتاب الإلكتروني
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">العنوان</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الوصف</label>
          <textarea
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">زر الدعوة (CTA Text)</label>
          <input
            type="text"
            value={form.ctaText}
            onChange={(e) => handleChange("ctaText", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">زر الدعوة (CTA Link)</label>
          <input
            type="text"
            value={form.ctaLink}
            onChange={(e) => handleChange("ctaLink", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <ImageCard
          imageUrl={imageUrl}
          uploading={isUploading}
          onUpload={handleUpload}
          onDelete={imageUrl ? handleRemove : undefined}
          uploadId="ebookImage"
          error={uploadError}
        />

        {/* Features */}
        {(["forWhom", "goals", "about"] as const).map((featureKey) => (
          <div key={featureKey}>
            <h3 className="font-semibold text-lg mt-4">
              {featureKey === "forWhom"
                ? "لمن هذا الكتاب؟"
                : featureKey === "goals"
                ? "أهداف الكتاب"
                : "حول الكتاب"}
            </h3>
            <div className="mt-2">
              <label className="block text-sm">العنوان</label>
              <input
                type="text"
                value={form.features[featureKey].title}
                onChange={(e) =>
                  handleFeatureChange(featureKey, "title", e.target.value)
                }
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm">الوصف</label>
              <textarea
                value={form.features[featureKey].description}
                onChange={(e) =>
                  handleFeatureChange(featureKey, "description", e.target.value)
                }
                className="w-full border border-gray-300 rounded px-4 py-2"
                rows={2}
              />
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={loading || isUploading}
          className="w-full btn-primary"
        >
          {loading || isUploading ? "جاري التحديث..." : "تحديث المعلومات"}
        </button>
      </form>
    </div>
  );
}
