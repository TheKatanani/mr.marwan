/** @format */

import React from "react"; 
import { Metadata } from "next"; 
import { Service } from "@/types/servece";
import { getServices } from "@/app/lib/services";
import Title from "@/app/components/Titile";
import CardServices from "@/app/components/CardServices";
export const metadata: Metadata = {
  title: "الخدمات",
  description: "تسويقكم نحو النجاح الرقمي",
};
const Services = async () => {
  const services: Service[] = await getServices();

  return (
    <main
      id="services"
      className="bg-gradient-to-b pt-10 from-white to-blue-50 text-gray-800"
    >
      {/* Pricing Cards */}
      <section className="py-16 min-h-screen bg-gradient-to-r from-white via-[#e3f9ff] to-white text-gray-800 grid place-items-center relative">
        <Title>الخدمات</Title>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Pricing Options */}
            {services.map((service, i) => (
              <CardServices service={service} key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
