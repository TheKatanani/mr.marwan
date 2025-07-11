"use client";

import { useEffect, useState } from "react";
import { fetchAboutPage, updateAboutPage } from "@/app/lib/about";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { AboutFormData } from "@/types/about";
import ImageCard from "@/app/components/ImageCard";
import { LocalizedField } from "@/types";
import { FaRegEdit, FaImage, FaRegListAlt } from "react-icons/fa";

export default function AboutDashboardPage() {
  const [form, setForm] = useState<AboutFormData>({
    hero: {
      title: { ar: "", en: "" },
      description: { ar: "", en: "" },
      ctaText: { ar: "", en: "" },
      ctaLink: "",
      image: "",
    },
    section2: {
      title: { ar: "", en: "" },
      description: { ar: "", en: "" },
      image: "",
    },
    journey: { title: { ar: "", en: "" }, content: { ar: "", en: "" } },
    whyBuild: { title: { ar: "", en: "" }, content: { ar: "", en: "" } },
    howWeWork: { title: { ar: "", en: "" }, content: { ar: "", en: "" } },
    messageInLife: { title: { ar: "", en: "" }, content: { ar: "", en: "" } },
    messageInTraining: {
      title: { ar: "", en: "" },
      content: { ar: "", en: "" },
    },
  });

  const { uploadMedia, uploading: isUploading } = useCloudinaryUploader();
  const [loading, setLoading] = useState(false);

  const handleUploadHero = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadMedia(file);
    if (url)
      setForm((prev) => ({ ...prev, hero: { ...prev.hero, image: url } }));
  };

  const handleUploadSection2 = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadMedia(file);
    if (url)
      setForm((prev) => ({
        ...prev,
        section2: { ...prev.section2, image: url },
      }));
  };

  const handleLocalizedChange = (
    field: keyof LocalizedField,
    sectionKey: keyof AboutFormData,
    fieldKey: keyof LocalizedField | string,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [fieldKey]: {
          ...prev[sectionKey][
            fieldKey as keyof (typeof prev)[typeof sectionKey]
          ],
          [field]: value,
        },
      },
    }));
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
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white shadow-2xl rounded-2xl text-gray-800 space-y-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700 flex items-center justify-center gap-2">
        <FaRegEdit className="text-blue-500" /> تحديث صفحة من نحن
      </h1>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Hero Section */}
        <section className="bg-white rounded-xl shadow p-6 space-y-4 border border-blue-100">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600 border-b pb-2">
            <FaImage /> القسم الأول (Hero)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="العنوان (AR)"
              value={form.hero.title.ar}
              onChange={(e) =>
                handleLocalizedChange("ar", "hero", "title", e.target.value)
              }
              className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <input
              type="text"
              placeholder="Title (EN)"
              value={form.hero.title.en}
              onChange={(e) =>
                handleLocalizedChange("en", "hero", "title", e.target.value)
              }
              className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <textarea
              placeholder="الوصف (AR)"
              value={form.hero.description.ar}
              onChange={(e) =>
                handleLocalizedChange("ar", "hero", "description", e.target.value)
              }
              className="textarea w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-blue-400"
            />
            <textarea
              placeholder="Description (EN)"
              value={form.hero.description.en}
              onChange={(e) =>
                handleLocalizedChange("en", "hero", "description", e.target.value)
              }
              className="textarea w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-blue-400"
            />
            <input
              type="text"
              placeholder="CTA Text (AR)"
              value={form.hero.ctaText.ar}
              onChange={(e) =>
                handleLocalizedChange("ar", "hero", "ctaText", e.target.value)
              }
              className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 "
            />
            <input
              type="text"
              placeholder="CTA Text (EN)"
              value={form.hero.ctaText.en}
              onChange={(e) =>
                handleLocalizedChange("en", "hero", "ctaText", e.target.value)
              }
              className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <input
              type="text"
              placeholder="CTA Link"
              value={form.hero.ctaLink}
              onChange={(e) =>
                setForm({
                  ...form,
                  hero: { ...form.hero, ctaLink: e.target.value },
                })
              }
              className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 col-span-1 md:col-span-2"
            />
          </div>
          <ImageCard
            imageUrl={form.hero.image}
            uploading={isUploading}
            onUpload={handleUploadHero}
            onDelete={
              form.hero.image
                ? () => setForm({ ...form, hero: { ...form.hero, image: "" } })
                : undefined
            }
            uploadId="heroImageUpload"
          />
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-xl shadow p-6 space-y-4 border border-blue-100">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600 border-b pb-2">
            <FaImage /> القسم الثاني
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="العنوان (AR)"
              value={form.section2.title.ar}
              onChange={(e) =>
                handleLocalizedChange("ar", "section2", "title", e.target.value)
              }
              className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <input
              type="text"
              placeholder="Title (EN)"
              value={form.section2.title.en}
              onChange={(e) =>
                handleLocalizedChange("en", "section2", "title", e.target.value)
              }
              className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <textarea
              placeholder="الوصف (AR)"
              value={form.section2.description.ar}
              onChange={(e) =>
                handleLocalizedChange(
                  "ar",
                  "section2",
                  "description",
                  e.target.value
                )
              }
              className="textarea w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-blue-400"
            />
            <textarea
              placeholder="Description (EN)"
              value={form.section2.description.en}
              onChange={(e) =>
                handleLocalizedChange(
                  "en",
                  "section2",
                  "description",
                  e.target.value
                )
              }
              className="textarea w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-blue-400"
            />
          </div>
          <ImageCard
            imageUrl={form.section2.image}
            uploading={isUploading}
            onUpload={handleUploadSection2}
            onDelete={
              form.section2.image
                ? () =>
                    setForm({
                      ...form,
                      section2: { ...form.section2, image: "" },
                    })
                : undefined
            }
            uploadId="section2ImageUpload"
          />
        </section>

        {/* Core Sections */}
        {[
          "journey",
          "whyBuild",
          "howWeWork",
          "messageInLife",
          "messageInTraining",
        ].map((key) => {
          const section = form[key as keyof AboutFormData];
          if ("content" in section) {
            return (
              <section
                key={key}
                className="bg-white rounded-xl shadow p-6 space-y-4 border border-blue-100"
              >
                <h2 className="text-xl font-bold flex items-center gap-2 text-blue-500 border-b pb-1 capitalize">
                  <FaRegListAlt /> {key}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="العنوان (AR)"
                    value={section.title.ar}
                    onChange={(e) =>
                      handleLocalizedChange(
                        "ar",
                        key as keyof AboutFormData,
                        "title",
                        e.target.value
                      )
                    }
                    className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                  <input
                    type="text"
                    placeholder="Title (EN)"
                    value={section.title.en}
                    onChange={(e) =>
                      handleLocalizedChange(
                        "en",
                        key as keyof AboutFormData,
                        "title",
                        e.target.value
                      )
                    }
                    className="input w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                  <textarea
                    placeholder="المحتوى (AR)"
                    value={section.content.ar}
                    onChange={(e) =>
                      handleLocalizedChange(
                        "ar",
                        key as keyof AboutFormData,
                        "content",
                        e.target.value
                      )
                    }
                    className="textarea w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-blue-400"
                  />
                  <textarea
                    placeholder="Content (EN)"
                    value={section.content.en}
                    onChange={(e) =>
                      handleLocalizedChange(
                        "en",
                        key as keyof AboutFormData,
                        "content",
                        e.target.value
                      )
                    }
                    className="textarea w-full border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </section>
            );
          }
          return null;
        })}

        <button
          type="submit"
          disabled={loading || isUploading}
          className="w-full py-3 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading || isUploading ? "جاري التحديث..." : "تحديث"}
        </button>
      </form>
    </div>
  );
}
