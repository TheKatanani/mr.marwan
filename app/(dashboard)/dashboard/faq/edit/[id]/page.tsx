'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getFAQ, updateFAQ } from '@/app/lib/faq';

export default function EditFAQ() {
  const { id } = useParams() as { id: string };
  const [faq, setFaq] = useState({ question: '', answer: '' });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFAQ(id);
      if (data) {
        setFaq({ question: data.question, answer: data.answer });
      } else {
        console.error('FAQ not found');
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (faq.question && faq.answer) {
      await updateFAQ(id, faq);
      router.push('/dashboard/faq');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 text-gray-800 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">تعديل سؤال شائع</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">السؤال</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="أدخل السؤال"
            value={faq.question}
            onChange={(e) => setFaq({ ...faq, question: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الإجابة</label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="أدخل الإجابة"
            rows={5}
            value={faq.answer}
            onChange={(e) => setFaq({ ...faq, answer: e.target.value })}
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary"
          >
            تحديث
          </button>
        </div>
      </form>
    </div>
  );
}
