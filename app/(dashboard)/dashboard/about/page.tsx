"use client";

import { useEffect, useState } from "react";
import { fetchAboutPage, updateAboutPage } from "@/app/lib/about";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { AboutFormData } from "@/types/about"; 
import ImageCard from "@/app/components/ImageCard";

export default function AboutDashboardPage() {
  const [form, setForm] = useState<AboutFormData>({
    hero: { title: "", description: "", ctaText: "", ctaLink: "", image: "" },
    section2: { title: "", image: "", description: "" },
    journey: { title: "", content: "" },
    whyBuild: { title: "", content: "" },
    howWeWork: { title: "", content: "" },
    messageInLife: { title: "", content: "" },
    messageInTraining: { title: "", content: "" },
  });
 
  const { uploadMedia, uploading: isUploading, error: uploadError } = useCloudinaryUploader();
  const [loading, setLoading] = useState(false);

  const handleUploadHero = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return; 
  const url = await uploadMedia(file);
  if (url) setForm(prev => ({ ...prev, hero: { ...prev.hero, image: url } }));
};

const handleUploadSection2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return; 
  const url = await uploadMedia(file);
  if (url) setForm(prev => ({ ...prev, section2: { ...prev.section2, image: url } }));
};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await updateAboutPage(form);
    setLoading(false);
    alert("تم التحديث بنجاح");
  };

  useEffect(() => {
    const fetchData = async () => {
      const aboutData = await fetchAboutPage();
      if (aboutData) setForm(aboutData);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800 space-y-8">
      <h1 className="text-3xl font-bold text-center">تحديث صفحة من نحن</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">القسم الأول (Hero)</h2>
          <input type="text" placeholder="العنوان" value={form.hero.title} onChange={(e) => setForm({ ...form, hero: { ...form.hero, title: e.target.value } })} className="input w-full" />
          <textarea placeholder="الوصف" value={form.hero.description} onChange={(e) => setForm({ ...form, hero: { ...form.hero, description: e.target.value } })} className="textarea w-full" />
          <input type="text" placeholder="نص الزر CTA" value={form.hero.ctaText} onChange={(e) => setForm({ ...form, hero: { ...form.hero, ctaText: e.target.value } })} className="input w-full" />
          <input type="text" placeholder="لينك CTA" value={form.hero.ctaLink} onChange={(e) => setForm({ ...form, hero: { ...form.hero, ctaLink: e.target.value } })} className="input w-full" />
          <ImageCard imageUrl={form.hero.image} uploading={isUploading} onUpload={handleUploadHero} onDelete={form.hero.image ? () => setForm({ ...form, hero: { ...form.hero, image: "" } }) : undefined} uploadId="heroImageUpload" />
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">القسم الثاني</h2>
          <input type="text" placeholder="العنوان" value={form.section2.title} onChange={(e) => setForm({ ...form, section2: { ...form.section2, title: e.target.value } })} className="input w-full" />
          <textarea placeholder="الوصف" value={form.section2.description} onChange={(e) => setForm({ ...form, section2: { ...form.section2, description: e.target.value } })} className="textarea w-full" />
          <ImageCard imageUrl={form.section2.image} uploading={isUploading} onUpload={handleUploadSection2} onDelete={form.section2.image ? () => setForm({ ...form, section2: { ...form.section2, image: "" } }) : undefined} uploadId="section2ImageUpload" />
        </section>

        {/* Core Sections */}
        {["journey", "whyBuild", "howWeWork", "messageInLife", "messageInTraining"].map((key) => {
          const section = form[key as keyof AboutFormData];
          if ("content" in section) {
            return (
              <section key={key} className="space-y-4">
                <h2 className="text-xl font-bold border-b pb-1">{section.title || key}</h2>
                <input type="text" placeholder="العنوان" value={section.title} onChange={(e) => setForm({ ...form, [key]: { ...section, title: e.target.value } })} className="input w-full" />
                <textarea placeholder="المحتوى" value={section.content} onChange={(e) => setForm({ ...form, [key]: { ...section, content: e.target.value } })} className="textarea w-full" />
              </section>
            );
          }
          return null;
        })}

        <button type="submit" disabled={loading || isUploading} className="btn-primary w-full py-3 text-lg font-semibold">
          {loading || isUploading ? "جاري التحديث..." : "تحديث"}
        </button>
      </form>
    </div>
  );
}
