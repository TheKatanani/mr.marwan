"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addFAQ } from "@/app/lib/faq";

export default function AddFAQ() {
  const [questionAr, setQuestionAr] = useState("");
  const [questionEn, setQuestionEn] = useState("");
  const [answerAr, setAnswerAr] = useState("");
  const [answerEn, setAnswerEn] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (questionAr && questionEn && answerAr && answerEn) {
      await addFAQ({
        question: { ar: questionAr, en: questionEn },
        answer: { ar: answerAr, en: answerEn },
      });
      router.push("/dashboard/faq");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white text-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">إضافة سؤال شائع</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">السؤال (AR)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="أدخل السؤال بالعربية"
            value={questionAr}
            onChange={(e) => setQuestionAr(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Question (EN)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="Enter the question in English"
            value={questionEn}
            onChange={(e) => setQuestionEn(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الإجابة (AR)</label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="أدخل الإجابة بالعربية"
            rows={4}
            value={answerAr}
            onChange={(e) => setAnswerAr(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Answer (EN)</label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            placeholder="Enter the answer in English"
            rows={4}
            value={answerEn}
            onChange={(e) => setAnswerEn(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn-primary">
            إضافة
          </button>
        </div>
      </form>
    </div>
  );
}
