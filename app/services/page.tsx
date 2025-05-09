/** @format */

import React from "react";
import Titile from "../components/Titile";
import { Metadata } from "next";
import CardServices from "../components/CardServices";
import { getServices } from "../lib/services";
import { Service } from "@/types/servece";
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
        <Titile>الخدمات</Titile>
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
