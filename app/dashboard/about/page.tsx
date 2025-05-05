"use client";

import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { db, storage } from "@/app/lib/firebase";
import { getAboutData } from "@/app/lib/about";

export default function AboutDashboardPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    description2: "",
    aboutImage: "",
    mainVideo: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAbout = async () => {
      const aboutData = await getAboutData();
      if (aboutData) {
        // const [desc1 = "", desc2 = ""] = (aboutData.description || "").split("\n\n");
        setForm({
          title: aboutData.title || "",
          description: aboutData.description || "",
          description2: aboutData.description2 || "",
          aboutImage: aboutData.aboutImage || "",
          mainVideo: aboutData.mainVideo || "",
        });
      }
    };
    fetchAbout();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let aboutImageUrl = form.aboutImage;

    if (imageFile) {
      const imageRef = ref(storage, `about/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      aboutImageUrl = await getDownloadURL(imageRef);
    }
 
    const docRef = doc(db, "about", "b3S8IfsOYkhM0Tc7fCKd");
    await updateDoc(docRef, {
      title: form.title,
      description: form.description,
      description2: form.description2,
      aboutImage: aboutImageUrl,
      mainVideo: form.mainVideo,
    });

    setLoading(false);
    alert("تم التحديث بنجاح");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">تحديث قسم "من نحن"</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">العنوان</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الفقرة الأولى</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            rows={4}
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">الفقرة الثانية</label>
          <textarea
            value={form.description2}
            onChange={(e) => setForm({ ...form, description2: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            rows={4}
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">رابط الفيديو</label>
          <input
            type="text"
            value={form.mainVideo}
            onChange={(e) => setForm({ ...form, mainVideo: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">صورة عن الموقع</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full"
          />
          {form.aboutImage && (
            <Image
              src={form.aboutImage}
              alt="About Image"
              width={400}
              height={250}
              className="mt-4 rounded border"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary"
        >
          {loading ? "جاري التحديث..." : "تحديث المعلومات"}
        </button>
      </form>
    </div>
  );
}
