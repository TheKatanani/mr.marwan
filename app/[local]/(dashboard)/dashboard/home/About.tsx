"use client";

import { useEffect, useState } from "react";
import { About } from "@/types/aboutHome";
import { getAboutData, updateAboutData } from "@/app/lib/home/aboutHome";
import { useImageUpload } from "@/app/hooks/useImageUpload";
import ImageCard from "@/app/components/ImageCard";

export default function AboutDashboardPage() {
  const [form, setForm] = useState<About>({
    title: { en: "", ar: "" },
    subTitle: { en: "", ar: "" },
    description: { en: "", ar: "" },
    aboutImage: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const { imageUrl, isUploading, uploadError, handleUpload, handleRemove } =
    useImageUpload({
      getImageUrl: () => form.aboutImage,
      setImageUrl: (url) => handleChange("aboutImage", url),
    });

  useEffect(() => {
    async function fetchAbout() {
      try {
        const data = await getAboutData();
        setForm(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, []);

  function handleChange(path: string, value: string) {
    const keys = path.split(".");
    setForm((prev) => {
      const updated = { ...prev };
      if (keys.length === 2) {
        (updated as any)[keys[0]][keys[1]] = value;
      } else {
        (updated as any)[path] = value;
      }
      return updated;
    });
  }

  async function handleSubmit() {
    setSaving(true);
    try {
      await updateAboutData(form);
      setMessage("Saved successfully ✅");
    } catch (err) {
      console.error(err);
      setMessage("Failed to save ❌");
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(""), 3000);
    }
  }

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white">
      <h1 className="text-2xl font-bold">Edit About Section</h1>

      {/* Title EN */}
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Title (EN)"
        value={form.title.en}
        onChange={(e) => handleChange("title.en", e.target.value)}
      />

      {/* Title AR */}
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Title (AR)"
        value={form.title.ar}
        onChange={(e) => handleChange("title.ar", e.target.value)}
      />
      {/* subTitle EN */}
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Sub Title (EN)"
        value={form.subTitle?.en}
        onChange={(e) => handleChange("subTitle.en", e.target.value)}
      />
      {/* subTitle AR */}
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Sub Title (AR)"
        value={form.subTitle?.ar}
        onChange={(e) => handleChange("subTitle.ar", e.target.value)}
      />
      {/* Description EN */}
      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Description (EN)"
        rows={4}
        value={form.description.en}
        onChange={(e) => handleChange("description.en", e.target.value)}
      />

      {/* Description AR */}
      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Description (AR)"
        rows={4}
        value={form.description.ar}
        onChange={(e) => handleChange("description.ar", e.target.value)}
      />

      {/* Image upload */}
      <ImageCard
        imageUrl={imageUrl}
        uploading={isUploading}
        onUpload={handleUpload}
        onDelete={imageUrl ? handleRemove : undefined}
        uploadId="card-image"
        error={uploadError}
        height={80}
        width={160}
      />

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={saving}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {saving ? "Saving..." : "Save"}
      </button>

      {/* Feedback message */}
      {message && <p className="text-green-500">{message}</p>}
    </div>
  );
}
