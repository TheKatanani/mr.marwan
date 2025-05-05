/** @format */

import React from "react";
import Title from "../components/Title";
import CardCources from "../components/CardCources";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "الدورات التدريبية",
  description: "تسويقكم نحو النجاح الرقمي",
  keywords: [
    "التسويق الإلكتروني",
    "خدمات التسويق",
    "تسويق رقمي",
    "استراتيجيات تسويقية",
  ],
};
const Services = () => {
  return (
    <main
      id="services"
      className="bg-gradient-to-b pt-10 from-white to-blue-50 text-gray-800"
    >
      {/* Hero Section */}
      {/* <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          خدمة التسويق الإلكتروني: تسويقكم نحو النجاح الرقمي
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          مرحباً بك في خدمة التسويق الإلكتروني الشاملة! نقدم حلولاً فعالة
          ومبتكرة للشركات التي تسعى للتفوق في عصر الرقمنة.
        </p>
      </section> */}

      {/* Pricing Cards */}
      <section className="py-16 min-h-[90vh] bg-gradient-to-r from-white via-[#e3f9ff] to-white text-gray-800 grid place-items-center relative">
        <Title>الدورات التدريبية</Title>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Pricing Options */}
            {[
              { title: "VIP Essential" },
              { title: "VIP Premier" },
              { title: "VIP Business" },
            ].map((plan, i) => (
              <CardCources plan={plan} key={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">لماذا نحن؟</h2>
          <p className="text-gray-600 text-lg leading-8">
            لأننا نقدم لك خبرة عملية، حلول مبتكرة، وأساليب تسويقية حديثة تضمن لك
            تحقيق أهدافك بأعلى كفاءة واحترافية.
          </p>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">جاهز لتحقيق نجاحك الرقمي؟</h2>
        <button className="btn-primary">اطلب الخدمة الآن</button>
      </section>
    </main>
  );
};

export default Services;
