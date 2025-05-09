/** @format */

"use client";

import ImageCard from "@/app/components/ImageCard";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { Service } from "@/types/servece";
import React, { useState } from "react";

type Props = {
  partners: string[];
  handleChange: <K extends keyof Service>(field: K, value: Service[K]) => void;
};

function Partners({ partners, handleChange }: Props) {
  const { uploadMedia } = useCloudinaryUploader();
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingIndex(index);
    const errors = [...uploadErrors];
    errors[index] = "";

    try {
      const url = await uploadMedia(file);
      if (url) {
        const updated = [...partners];
        updated[index] = url;
        handleChange("partners", updated);
      } else {
        errors[index] = "Upload failed.";
      }
    } catch {
      errors[index] = "Something went wrong during upload.";
    } finally {
      setUploadingIndex(null);
      setUploadErrors(errors);
    }
  };

  const handleRemovePartner = (index: number) => {
    const updated = [...partners];
    updated.splice(index, 1);
    handleChange("partners", updated);
  };

  const handleAddPartner = () => {
    handleChange("partners", [...partners, ""]);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-gray-700">
        Partners
      </label>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners.map((logo, index) => (
          <ImageCard
            key={index}
            imageUrl={logo}
            uploading={uploadingIndex === index}
            onUpload={(e) => handleImageUpload(e, index)}
            onDelete={() => handleRemovePartner(index)}
            uploadId={`partner-logo-${index}`}
            error={uploadErrors[index]}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddPartner}
        className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        ➕ Add Partner
      </button>
    </div>
  );
}

export default Partners;
