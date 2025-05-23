/** @format */

import { Metadata } from "next";
import Title from "../Titile";
import FAQComp from "./FAQ";
export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "الأسئلة الشائعة التي قد تهمك",
};

export default function FAQ() {
  return (
    <section id="FAQ" className="custom-bg py-16 pt-30 text-gray-800" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 grid place-items-center text-gray-800">
        <Title className="mb-12 mt-9">الأسئلة الشائعة</Title>
        <FAQComp />
      </div>
    </section>
  );
}
