/** @format */

import { Metadata } from "next";
import Title from "../Titile";
import FAQComp from "./FAQ";
import { getTranslations } from "next-intl/server";
import { FAQType } from "@/types/FAQ";
export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "الأسئلة الشائعة التي قد تهمك",
};

export default async function FAQ({faqs}: { faqs: FAQType[] }) {
  const t = await getTranslations("FAQs");
  return (
    <section id="FAQ" className="custom-bg py-16  text-gray-800" >
      <div className="max-w-4xl mx-auto px-4 grid place-items-center text-gray-800">
        <Title className="mb-12 mt-9">{t("title")}</Title>
        <FAQComp faqs={faqs}/>
      </div>
    </section>
  );
}
