'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPostById, updatePost } from '@/app/lib/posts';

export default function EditPostPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter(); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      console.log('the post is :', post)
      if (post) {
        setTitle(post.title || '');
        setContent(post.content || '');
      }
      setInitialLoading(false);
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await updatePost(id, { title, content });
    setLoading(false);

    if (success) {
      alert('تم تعديل المقال بنجاح!');
      router.push('/dashboard/posts');
    } else {
      alert('فشل في تعديل المقال.');
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        جاري تحميل بيانات المقال...
      </div>
    );
  }

  return (
    <div dir="rtl" className="max-w-2xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">تعديل المقال</h1>
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
          {loading ? 'جاري التعديل...' : 'حفظ التعديلات'}
        </button>
      </form>
    </div>
  );
}
