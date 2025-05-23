// app/dashboard/faq/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { deleteFAQ, getFAQs } from '@/app/lib/faq';

export default function FAQDashboard() {
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      const data = await getFAQs();
      setFaqs(data);
    };
    fetchFAQs();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteFAQ(id);
    setFaqs((prev) => prev.filter((faq) => faq.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">إدارة الأسئلة الشائعة</h1>
        <Link
          href="/dashboard/faq/new"
          className="btn-primary"
        >
          + أضف سؤال
        </Link>
      </div>

      <div className="space-y-4">
        {faqs.length === 0 ? (
          <p className="text-gray-500">لا يوجد أسئلة حالياً.</p>
        ) : (
          faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 p-5 rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold mb-1 text-gray-900">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
              <div className="flex gap-4 mt-4">
                <Link
                  href={`/dashboard/faq/edit/${faq.id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  تعديل
                </Link>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  حذف
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
