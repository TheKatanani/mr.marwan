"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPostById, updatePost } from "@/app/lib/posts";
import type { Post } from "@/types/post";

type Props = {
  params: {
    id: string;
  };
};

export default function EditPostPage({ params }: Props) {
  const { id } = params;
  const router = useRouter();

  const [titleAr, setTitleAr] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [contentAr, setContentAr] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      if (post) {
        setTitleAr(post.title.ar || "");
        setTitleEn(post.title.en || "");
        setContentAr(post.content.ar || "");
        setContentEn(post.content.en || "");
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await updatePost(id, {
      title: { ar: titleAr, en: titleEn },
      content: { ar: contentAr, en: contentEn },
    });

    setLoading(false);
    if (success) {
      alert("تم تحديث المقال بنجاح!");
      router.push("/dashboard/posts");
    } else {
      alert("فشل في تحديث المقال.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">تعديل المقال</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">عنوان المقال (عربي)</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded"
              value={titleAr}
              onChange={(e) => setTitleAr(e.target.value)}
              required
              placeholder="أدخل العنوان العربي"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Title (English)</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              required
              placeholder="Enter English title"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">محتوى المقال (عربي)</label>
            <textarea
              className="w-full border px-4 py-2 rounded min-h-[150px] resize-none"
              value={contentAr}
              onChange={(e) => setContentAr(e.target.value)}
              required
              placeholder="أدخل محتوى المقال"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Content (English)</label>
            <textarea
              className="w-full border px-4 py-2 rounded min-h-[150px] resize-none"
              value={contentEn}
              onChange={(e) => setContentEn(e.target.value)}
              required
              placeholder="Enter English content"
            />
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "جاري التحديث..." : "تحديث المقال"}
        </button>
      </form>
    </div>
  );
}
