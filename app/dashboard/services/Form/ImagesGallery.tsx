'use client';

import ImageCard from "@/app/components/ImageCard";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { Service } from "@/types/servece";
import React, { useState } from "react";

type Props = {
  gallery: { images: string[]; videos: string[] };
  handleChange: <K extends keyof Service>(field: K, value: Service[K]) => void;
};

function ImagesGallery({ gallery, handleChange }: Props) {
  const { uploadMedia } = useCloudinaryUploader();
  const { images } = gallery;

  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingIndex(index);
    const errors = [...uploadErrors];
    errors[index] = '';

    try {
      const url = await uploadMedia(file);
      if (url) {
        const updated = [...images];
        updated[index] = url;
        handleChange("gallery", { ...gallery, images: updated });
      } else {
        errors[index] = 'Upload failed.';
      }
    } catch {
      errors[index] = 'Something went wrong during upload.';
    } finally {
      setUploadingIndex(null);
      setUploadErrors(errors);
    }
  };

  const handleAddImage = () => {
    handleChange("gallery", { ...gallery, images: [...images, ""] });
  };

  const handleRemoveImage = (index: number) => {
    const updated = [...images];
    updated.splice(index, 1);
    handleChange("gallery", { ...gallery, images: updated });
  };

  return (
    <div className="space-y-6">
      <label className="block font-semibold text-sm text-gray-700">
        Gallery Images
      </label>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, index) => (
          <ImageCard
            key={index}
            imageUrl={img}
            uploading={uploadingIndex === index}
            onUpload={(e) => handleImageUpload(e, index)}
            onDelete={() => handleRemoveImage(index)}
            uploadId={`gallery-image-${index}`}
            error={uploadErrors[index]}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddImage}
        className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
      >
        ➕ Add Image
      </button>
    </div>
  );
}

export default ImagesGallery;
