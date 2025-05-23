/** @format */

"use client";

import { useEffect, useState } from "react";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import ImageCard from "@/app/components/ImageCard";
import { HomeBannerData } from "@/types/home";
import { fetchHomeBanner, updateHomeBanner } from "@/app/lib/home/banner";

const BannerDashboard = () => {
  const [form, setForm] = useState<HomeBannerData>({
    title: "",
    subtitle: "",
    ctaText: "",
    backgroundImageUrl: "",
    bannerImageUrl: "",
  });

  const { uploadMedia, uploading } = useCloudinaryUploader();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = <K extends keyof HomeBannerData>(
    field: K,
    value: HomeBannerData[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "backgroundImageUrl" | "bannerImageUrl"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError("");

    try {
      const url = await uploadMedia(file);
      if (url) {
        handleChange(field, url);
      } else {
        setUploadError("فشل في تحميل الصورة.");
      }
    } catch {
      setUploadError("حدث خطأ أثناء تحميل الصورة.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = (field: "backgroundImageUrl" | "bannerImageUrl") => {
    handleChange(field, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateHomeBanner(form);
      alert("تم تحديث البانر بنجاح");
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء التحديث");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomeBanner();
      if (data) setForm(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">تحديث قسم البانر</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">العنوان الرئيسي</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className="block mb-1 font-medium">العنوان الفرعي</label>
          <input
            type="text"
            value={form.subtitle}
            onChange={(e) => handleChange("subtitle", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* CTA Text */}
        <div>
          <label className="block mb-1 font-medium">نص زر CTA</label>
          <input
            type="text"
            value={form.ctaText}
            onChange={(e) => handleChange("ctaText", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="flex   gap-4">
          {/* Background Image */}
          <div>
            <label className="block mb-1 font-medium">صورة خلفية البانر</label>
            <ImageCard
              imageUrl={form.backgroundImageUrl}
              uploading={isUploading}
              onUpload={(e) => handleUpload(e, "backgroundImageUrl")}
              onDelete={
                form.backgroundImageUrl
                  ? () => handleRemove("backgroundImageUrl")
                  : undefined
              }
              uploadId="backgroundImageUrl"
              error={uploadError}
            />
          </div>

          {/* Logo Image */}
          <div>
            <label className="block mb-1 font-medium">صورة البانر</label>
            <ImageCard
              imageUrl={form.bannerImageUrl}
              uploading={isUploading}
              onUpload={(e) => handleUpload(e, "bannerImageUrl")}
              onDelete={
                form.bannerImageUrl
                  ? () => handleRemove("bannerImageUrl")
                  : undefined
              }
              uploadId="bannerLogoUpload"
              error={uploadError}
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full btn-primary"
        >
          {loading || uploading ? "جاري الحفظ..." : "حفظ التعديلات"}
        </button>
      </form>
    </div>
  );
};

export default BannerDashboard;
