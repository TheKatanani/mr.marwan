"use client";

import { useEffect, useState } from "react";
import { Course } from "@/types/course";
import { Standard } from "@/types/standard";
import { getStandards } from "@/app/lib/standards";
import ImageCard from "../../ImageCard";
import { useImageUpload } from "@/app/hooks/useImageUpload";

interface Props {
  form: Course;
  handleChange: (path: string, value: any) => void;
}

export default function GeneralInfoForm({ form, handleChange }: Props) {
  const [standards, setStandards] = useState<Standard[]>([]);

  const {
    imageUrl,
    isUploading,
    uploadError,
    handleUpload,
    handleRemove,
  } = useImageUpload({
    getImageUrl: () => form.card.image,
    setImageUrl: (url) => handleChange("card.image", url),
  });

  useEffect(() => {
    const fetchStandards = async () => {
      const data = await getStandards();
      setStandards(data);
    };
    fetchStandards();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Main course checkbox */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={form.isMain}
          onChange={(e) => handleChange("isMain", e.target.checked)}
        />
        <span>Main Course?</span>
      </label>

      {/* Standard selector */}
      <select
        className="border px-4 py-2 rounded"
        value={form.standardId}
        onChange={(e) => handleChange("standardId", e.target.value)}
      >
        <option value="">Select Standard</option>
        {standards.map((standard) => (
          <option key={standard.id} value={standard.id}>
            {standard.name?.en}
          </option>
        ))}
      </select>

      {/* Image upload */}
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

      {/* Title EN */}
      <input
        className="border px-4 py-2 rounded"
        placeholder="Course Title (EN)"
        value={form.card.title?.en || ""}
        onChange={(e) => handleChange("card.title.en", e.target.value)}
      />

      {/* Title AR */}
      <input
        className="border px-4 py-2 rounded"
        placeholder="Course Title (AR)"
        value={form.card.title?.ar || ""}
        onChange={(e) => handleChange("card.title.ar", e.target.value)}
      />

      {/* Short Description EN */}
      <input
        className="border px-4 py-2 rounded"
        placeholder="Short Description (EN)"
        value={form.card.short_description?.en || ""}
        onChange={(e) =>
          handleChange("card.short_description.en", e.target.value)
        }
      />

      {/* Short Description AR */}
      <input
        className="border px-4 py-2 rounded"
        placeholder="Short Description (AR)"
        value={form.card.short_description?.ar || ""}
        onChange={(e) =>
          handleChange("card.short_description.ar", e.target.value)
        }
      />

      {/* Duration EN */}
      <input
        className="border px-4 py-2 rounded"
        placeholder="Duration (EN)"
        value={form.card.duration?.en || ""}
        onChange={(e) => handleChange("card.duration.en", e.target.value)}
      />

      {/* Duration AR */}
      <input
        className="border px-4 py-2 rounded"
        placeholder="Duration (AR)"
        value={form.card.duration?.ar || ""}
        onChange={(e) => handleChange("card.duration.ar", e.target.value)}
      />
    </div>
  );
}
