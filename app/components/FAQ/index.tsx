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

export default async function FAQ({ faqs }: { faqs: FAQType[] }) {
  const t = await getTranslations("FAQs");

  return (
    <section id="FAQ" className="custom-bg py-16 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Title className="mb-8 sm:mb-12 mt-4 sm:mt-8">{t("title")}</Title>
        </div>
        <div className="max-w-4xl mx-auto">
          <FAQComp faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
