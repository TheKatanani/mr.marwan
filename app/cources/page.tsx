import React from "react";
import Titile from "../components/Titile";
import { Metadata } from "next"; 
import CardCources from "../components/CardCource";
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
      id="cources"
      className="bg-gradient-to-b pt-10 from-white to-blue-50 text-gray-800"
    >
      {/* Pricing Cards */}
      <section className="py-16 min-h-[90vh] bg-gradient-to-r from-white via-[#e3f9ff] to-white text-gray-800 grid place-items-center relative">
        <Titile>الدورات التدريبية</Titile>
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
    </main>
  );
};

export default Services;
