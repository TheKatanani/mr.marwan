/** @format */

"use client";

import { Service } from "@/types/servece";
import { useState } from "react";
import { emptyService } from "./initialData";
import Head from "next/head";
import HeaderImage from "./headerImage";
import Video from "./Video";
import ImagesGallery from "./ImagesGallery";
import VideosGallery from "./VideoGallery";
import Partners from "./Partners";
import Subscriptions from "./Subscriptions";

interface ServiceFormProps {
  onSubmit: (data: Service) => void;
  initialData?: Service;
}

export default function ServiceForm({
  onSubmit,
  initialData = emptyService,
}: ServiceFormProps) {
  const [service, setService] = useState<Service>(initialData);

  const handleChange = <K extends keyof Service>(
    field: K,
    value: Service[K]
  ) => {
    setService((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = <K extends keyof Service>(
    field: K,
    index: number,
    key: string,
    value: any
  ) => {
    const arrayCopy = [...(service[field] as any[])];
    if (typeof arrayCopy[index] === "object" && key) {
      arrayCopy[index] = { ...arrayCopy[index], [key]: value };
    } else {
      arrayCopy[index] = value;
    }
    setService((prev) => ({ ...prev, [field]: arrayCopy }));
  };

  const handleAddItem = <K extends keyof Service>(field: K, item: any) => {
    setService((prev) => ({
      ...prev,
      [field]: [...(prev[field] as any[]), item],
    }));
  };

  const handleRemoveItem = <K extends keyof Service>(
    field: K,
    index: number
  ) => {
    const arrayCopy = [...(service[field] as any[])];
    arrayCopy.splice(index, 1);
    setService((prev) => ({ ...prev, [field]: arrayCopy }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(service);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-xl shadow-md text-gray-700"
    >
      {/* Headline */}
      <div>
        <label className="block font-medium">Headline</label>
        <input
          type="text"
          value={service.headline}
          onChange={(e) => handleChange("headline", e.target.value)}
          className="input"
          placeholder="Enter the headline"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          value={service.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="input"
          placeholder="Enter the description"
        />
      </div>

      {/* Subscribe URL */}
      <div>
        <label className="block font-medium">Subscribe URL</label>
        <input
          type="url"
          value={service.subscribeURL}
          onChange={(e) => handleChange("subscribeURL", e.target.value)}
          className="input"
          placeholder="Enter the subscribe URL"
        />
      </div>

      {/* Head Image */}
      <HeaderImage handleChange={handleChange} headImage={service.headImage} />

      {/* Video URL */}
      <Video handleChange={handleChange} videoUrl={service.videoUrl} />

      {/* Features */}
      <div>
        <label className="block font-medium">Features</label>
        {service.features.map((feature, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={feature}
              onChange={(e) =>
                handleArrayChange("features", index, "", e.target.value)
              }
              className="input flex-1"
              placeholder="Enter a feature"
            />
            <button
              type="button"
              onClick={() => handleRemoveItem("features", index)}
              className="text-red-500"
            >
              🗑
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("features", "")}
          className="text-blue-600 text-sm"
        >
          + Add Feature
        </button>
      </div>

      {/* Subscriptions */}
      <Subscriptions
        handleAddItem={handleAddItem}
        handleArrayChange={handleArrayChange}
        subscriptions={service.subscriptions}
      />
      {/* Gallery */}
      <ImagesGallery gallery={service.gallery} handleChange={handleChange} />

      <VideosGallery gallery={service.gallery} handleChange={handleChange} />

      {/* Reviews */}
      <div>
        <label className="block font-medium">Customer Reviews</label>
        {service.reviews.map((rev, index) => (
          <div key={index} className="space-y-2 border p-4 rounded-md">
            <textarea
              className="input"
              placeholder="Quote"
              value={rev.qoute}
              onChange={(e) =>
                handleArrayChange("reviews", index, "qoute", e.target.value)
              }
            />
            <input
              type="number"
              className="input"
              placeholder="Rating (1-5)"
              value={rev.rating}
              onChange={(e) =>
                handleArrayChange(
                  "reviews",
                  index,
                  "rating",
                  parseInt(e.target.value)
                )
              }
            />
          </div>
        ))}
        <button
          type="button"
          className="text-blue-600 text-sm"
          onClick={() => handleAddItem("reviews", { qoute: "", rating: 5 })}
        >
          + Add Review
        </button>
      </div>

      {/* Partners */}
      <Partners handleChange={handleChange} partners={service.partners} />

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full mt-4"
      >
        Save Service
      </button>
    </form>
  );
}
