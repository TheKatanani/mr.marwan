"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getFAQ, updateFAQ } from "@/app/lib/faq";
import { FAQType } from "@/types/FAQ";

export default function EditFAQ() {
  const { id } = useParams() as { id: string };
  const [faq, setFaq] = useState<FAQType>({
    question: { ar: "", en: "" },
    answer: { ar: "", en: "" },
  });

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFAQ(id);
      if (data) setFaq(data);
      else alert("FAQ not found");
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      faq.question &&
      faq.answer&&
      faq.question.ar &&
      faq.question.en &&
      faq.answer.ar &&
      faq.answer.en
    ) {
      await updateFAQ(id, faq);
      router.push("/dashboard/faq");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white text-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">تعديل سؤال شائع</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">السؤال (AR)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="أدخل السؤال بالعربية"
            value={faq.question?.ar ?? ""}
            onChange={(e) =>
              setFaq({
                ...faq,
                question: { ar: e.target.value, en: faq.question?.en ?? "" },
              })
            }
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Question (EN)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="Enter the question in English"
            value={faq.question?.en ?? ""}
            onChange={(e) =>
              setFaq({
                ...faq,
                question: { ar: faq.question?.ar ?? "", en: e.target.value },
              })
            }
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الإجابة (AR)</label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="أدخل الإجابة بالعربية"
            rows={4}
            value={faq.answer?.ar ?? ""}
            onChange={(e) =>
              setFaq({
                ...faq,
                answer: { ar: e.target.value, en: faq.answer?.en ?? "" },
              })
            }
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Answer (EN)</label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="Enter the answer in English"
            rows={4}
            value={faq.answer?.en ?? ""}
            onChange={(e) =>
              setFaq({
                ...faq,
                answer: { ar: faq.answer?.ar ?? "", en: e.target.value },
              })
            }
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn-primary">
            تحديث
          </button>
        </div>
      </form>
    </div>
  );
}
