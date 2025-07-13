// app/components/StandardForm/AboutForm.tsx
"use client";

import { Standard } from "@/types/standard";
import { useImageUpload } from "@/app/hooks/useImageUpload";
import ImageCard from "@/app/components/ImageCard";

interface Props {
  form: Standard;
  handleChange: (path: string, value: any) => void;
}

export default function AboutForm({ form, handleChange }: Props) {
  const {
    imageUrl,
    isUploading,
    uploadError,
    handleUpload,
    handleRemove,
  } = useImageUpload({
    getImageUrl: () => form.about.image,
    setImageUrl: (url) => handleChange("about.image", url),
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="About Title (EN)"
          value={form.about.title.en}
          onChange={(e) => handleChange("about.title.en", e.target.value)}
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="About Title (AR)"
          value={form.about.title.ar}
          onChange={(e) => handleChange("about.title.ar", e.target.value)}
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="About Subtitle (EN)"
          value={form.about.subtitle.en}
          onChange={(e) => handleChange("about.subtitle.en", e.target.value)}
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="About Subtitle (AR)"
          value={form.about.subtitle.ar}
          onChange={(e) => handleChange("about.subtitle.ar", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          className="w-full border px-4 py-2 rounded"
          placeholder="About Description (EN)"
          value={form.about.description.en}
          onChange={(e) => handleChange("about.description.en", e.target.value)}
        />
        <textarea
          className="w-full border px-4 py-2 rounded"
          placeholder="About Description (AR)"
          value={form.about.description.ar}
          onChange={(e) => handleChange("about.description.ar", e.target.value)}
        />
      </div>

      <ImageCard
        imageUrl={imageUrl}
        uploading={isUploading}
        onUpload={handleUpload}
        onDelete={imageUrl ? handleRemove : undefined}
        uploadId="about-image"
        error={uploadError}
        height={80}
        width={160}
      />
    </div>
  );
}
