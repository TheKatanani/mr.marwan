"use client";

import { useState } from "react";
import HelicopterCarousel from "@/app/components/HelicopterCarousel";

export function HelicopterDescription({ description }: { description: string }) {
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-20 border rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">About the Helicopter</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
    </section>
  );
}

export function HelicopterFeatures({ features }: { features: string[] }) {
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-20 border rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Key Features</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}

export function HelicopterUsage({ usage }: { usage: string }) {
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-20 border rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Usage</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{usage}</p>
    </section>
  );
}

export default function Helicopter() {
  const [selectedHelicopter, setSelectedHelicopter] = useState({
    description:
      "This helicopter is engineered for performance and flexibility, providing exceptional comfort and control in various terrains and weather conditions.",
    features: [
      "Advanced avionics suite",
      "Customizable interiors",
      "Efficient fuel consumption",
      "Lightweight composite structure",
    ],
    usage:
      "Ideal for corporate transport, emergency services, sightseeing, and pilot training missions across the globe.",
  });

  return (
    <div className="space-y-12">
      <HelicopterCarousel /* onSelect={setSelectedHelicopter} */ />

      {selectedHelicopter && (
        <div className="max-w-6xl mx-auto px-4">
          <HelicopterDescription description={selectedHelicopter.description} />
          <HelicopterFeatures features={selectedHelicopter.features} />
          <HelicopterUsage usage={selectedHelicopter.usage} />
        </div>
      )}
    </div>
  );
}
