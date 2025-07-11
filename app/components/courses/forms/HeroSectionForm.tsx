"use client";

import { Course } from "@/types/course";
import ImageCard from "../../ImageCard";
import { useImageUpload } from "@/app/hooks/useImageUpload";

interface Props {
  form: Course;
  handleChange: (path: string, value: any) => void;
}

export default function HeroSectionForm({ form, handleChange }: Props) {
  const { imageUrl, isUploading, uploadError, handleUpload, handleRemove } =
    useImageUpload({
      getImageUrl: () => form.hero.image,
      setImageUrl: (url) => handleChange("hero.image", url),
    });
  return (
    <div className="space-y-4">
        <ImageCard
        imageUrl={imageUrl}
        uploading={isUploading}
        onUpload={handleUpload}
        onDelete={imageUrl ? handleRemove : undefined}
        uploadId="card-image"
        error={uploadError}
        height={80}
        width={160}
      />

      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Title (EN)"
        value={form.hero.title?.en}
        onChange={(e) => handleChange("hero.title.en", e.target.value)}
      />

      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Title (AR)"
        value={form.hero.title?.ar}
        onChange={(e) => handleChange("hero.title.ar", e.target.value)}
      />

      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Description (EN)"
        value={form.hero.description?.en}
        onChange={(e) => handleChange("hero.description.en", e.target.value)}
      />

      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Description (AR)"
        value={form.hero.description?.ar}
        onChange={(e) => handleChange("hero.description.ar", e.target.value)}
      />
    </div>
  );
}
