"use client";

import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { db } from "@/app/lib/firebase";
import { getAboutData } from "@/app/lib/about";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader"; // adjust the path if needed
import { About } from "../../../types/about";

export default function AboutDashboardPage() {
  const [form, setForm] = useState<About>({
    title: "",
    description: "",
    description2: "",
    aboutImage: "",
    mainVideo: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const { uploadMedia: uploadToCloudinary, uploading } = useCloudinaryUploader();

  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = form.aboutImage;
    let videoUrl = form.mainVideo;

    if (imageFile) {
      const uploadedImage = await uploadToCloudinary(imageFile);
      if (uploadedImage) imageUrl = uploadedImage;
    }

    if (videoFile) {
      const uploadedVideo = await uploadToCloudinary(videoFile);
      if (uploadedVideo) videoUrl = uploadedVideo;
    }

    const docRef = doc(db, "about", "b3S8IfsOYkhM0Tc7fCKd");
    await updateDoc(docRef, {
      title: form.title,
      description: form.description,
      description2: form.description2,
      aboutImage: imageUrl,
      mainVideo: videoUrl,
    });

    setLoading(false);
    alert("تم التحديث بنجاح");
  };
  useEffect(() => {
    const fetchAbout = async () => {
      const aboutData = await getAboutData(); 
      if (aboutData) {
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
          <label className="block mb-1 font-medium">تحميل صورة</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full"
          />
          {form.aboutImage && (
            <Image
              src={form?.aboutImage}
              alt="About Image"
              width={400}
              height={250}
              className="mt-4 rounded border"
            />
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">تحميل فيديو</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
            className="w-full"
          />
          {form.mainVideo && (
            <video
              controls
              src={form?.mainVideo}
              className="mt-4 w-full rounded border"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full btn-primary"
        >
          {loading || uploading ? "جاري التحديث..." : "تحديث المعلومات"}
        </button>
      </form>
    </div>
  );
}
