'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addFAQ } from '@/app/lib/faq';

export default function AddFAQ() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (question && answer) {
      await addFAQ({ question, answer });
      router.push('/dashboard/faq');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 text-gray-800 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">إضافة سؤال شائع</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">السؤال</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="أدخل السؤال"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الإجابة</label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="أدخل الإجابة"
            rows={5}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary"
          >
            إضافة
          </button>
        </div>
      </form>
    </div>
  );
}
