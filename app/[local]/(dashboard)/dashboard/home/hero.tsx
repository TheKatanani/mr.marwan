"use client";

import { useState, useEffect } from "react";
import { HeroSectionData } from "@/types/home";
import { fetchHeroSection, updateHeroSection } from "@/app/lib/home/hero";

const HeroDashboard = ({ lang }: { lang: "ar" | "en" }) => {
  const [formData, setFormData] = useState<HeroSectionData>({
    title: "",
    subtitle: "",
    ctaText: "",
    ctaLink: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch data on mount and when lang changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchHeroSection(lang);
      if (data) {
        setFormData(data);
      } else {
        // Fallback to empty values if no data
        setFormData({
          title: "",
          subtitle: "",
          ctaText: "",
          ctaLink: "",
        });
      }
      setLoading(false);
    };
    loadData();
  }, [lang]); // 👈 make sure lang is a dependency

  const handleChange = (field: keyof HeroSectionData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    await updateHeroSection(lang, formData);
    alert(
      lang === "ar"
        ? "تم تحديث قسم الهيرو بنجاح"
        : "Hero section updated successfully"
    );
  };

  if (loading)
    return (
      <div className="text-center py-10 text-gray-500">جاري التحميل...</div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">
        {lang === "ar" ? "تحديث قسم الهيرو" : "Update Hero Section"}
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="space-y-6"
      >
        <div>
          <label className="block mb-1 font-medium">
            {lang === "ar" ? "العنوان الرئيسي" : "Main Title"}
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            {lang === "ar" ? "العنوان الفرعي" : "Subtitle"}
          </label>
          <input
            type="text"
            value={formData.subtitle}
            onChange={(e) => handleChange("subtitle", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            {lang === "ar" ? "نص زر الدعوة (CTA)" : "CTA Button Text"}
          </label>
          <input
            type="text"
            value={formData.ctaText}
            onChange={(e) => handleChange("ctaText", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            {lang === "ar" ? "رابط زر الدعوة (CTA)" : "CTA Link"}
          </label>
          <input
            type="text"
            value={formData.ctaLink}
            onChange={(e) => handleChange("ctaLink", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <button type="submit" className="w-full btn-primary">
          {loading
            ? lang === "ar"
              ? "جاري الحفظ..."
              : "Saving..."
            : lang === "ar"
            ? "حفظ التعديلات"
            : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default HeroDashboard;
