"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { deleteFAQ, getFAQs } from "@/app/lib/faq";
import { FAQType } from "@/types/FAQ";

export default function FAQDashboard() {
  const [faqs, setFaqs] = useState<(FAQType & { id: string })[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      const data = await getFAQs();
      setFaqs(data as any);
    };
    fetchFAQs();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("هل أنت متأكد أنك تريد حذف هذا السؤال؟")) {
      setDeletingId(id);
      await deleteFAQ(id);
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">إدارة الأسئلة الشائعة</h1>
        <Link
          href="/dashboard/faq/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + أضف سؤال
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-right">السؤال (عربي)</th>
              <th className="py-3 px-4 text-right">Question (EN)</th>
              <th className="py-3 px-4 text-right">الإجابة (عربي)</th>
              <th className="py-3 px-4 text-right">Answer (EN)</th>
              <th className="py-3 px-4 text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {faqs.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  لا يوجد أسئلة حالياً.
                </td>
              </tr>
            ) : (
              faqs.map((faq, idx) => (
                <tr
                  key={faq.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-4">{faq.question?.ar || "-"}</td>
                  <td className="py-3 px-4">{faq.question?.en || "-"}</td>
                  <td className="py-3 px-4">{faq.answer?.ar || "-"}</td>
                  <td className="py-3 px-4">{faq.answer?.en || "-"}</td>
                  <td className="py-3 px-4 text-center">
                    <Link
                      href={`/dashboard/faq/edit/${faq.id}`}
                      className="inline-block px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition mr-2"
                    >
                      تعديل
                    </Link>
                    <button
                      onClick={() => handleDelete(faq.id)}
                      disabled={deletingId === faq.id}
                      className={`inline-block px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition ${
                        deletingId === faq.id ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {deletingId === faq.id ? "جارٍ الحذف..." : "حذف"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
