'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/app/lib/posts'; 
export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const id = await createPost({ title, content });
    setLoading(false);

    if (id) {
      alert('تم إنشاء المقال بنجاح!');
      router.push('/dashboard/posts');
    } else {
      alert('فشل في إنشاء المقال.');
    }
  };

  return (
    <div dir="rtl" className="max-w-2xl mx-auto py-10 px-4 text-gray-800 custom-bg ">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">إنشاء مقال جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">عنوان المقال</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="أدخل عنوان المقال"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">محتوى المقال</label>
          <textarea
            className="w-full border border-gray-300 px-4 py-2 rounded min-h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="أدخل محتوى المقال هنا"
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
        >
          {loading ? 'جاري الإنشاء...' : 'إنشاء المقال'}
        </button>
      </form>
    </div>
  );
}
