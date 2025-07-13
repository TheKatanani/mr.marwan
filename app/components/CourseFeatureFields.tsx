"use client";

import React from "react";
import { CourseFeatures } from "@/types/course";
import { LocalizedField } from "@/types";
import { defaultCourseFeatures } from "../[local]/(dashboard)/dashboard/courses/defoultState";

type Props = {
  value?: CourseFeatures; // Allow undefined
  onChange: (val: CourseFeatures) => void;
};

const featureKeys = {
  duration: "Duration",
  investment: "Investment",
  level: "Level",
  trainingMode: "Training Mode",
  certification: "Certification",
} as const;

const getSafeField = (lang: keyof LocalizedField, field?: LocalizedField) => {
  return field?.[lang] ?? "";
};

const getSafeIcon = (item?: { icon?: string }) => {
  return item?.icon ?? "";
};

export default function CourseFeatureFields({ value, onChange }: Props) {
  const handleChange = (
    key: keyof CourseFeatures,
    field: keyof CourseFeatures[keyof CourseFeatures],
    lang: keyof LocalizedField | "",
    val: string
  ) => {
    const currentItem = value?.[key] ?? {
      icon: "",
      title: { en: "", ar: "" },
      description: { en: "", ar: "" },
    };

    const updated = {
      ...value,
      [key]: {
        ...currentItem,
        [field]:
          field === "icon"
            ? val
            : {
                ...currentItem[field as "title" | "description"],
                [lang]: val,
              },
      },
    } as CourseFeatures;

    onChange(updated);
  };

  //   if (!value) return <div className="text-gray-500">No feature data provided.</div>;
  if (!value) value = defaultCourseFeatures;

  return (
    <div className="space-y-6">
      {Object.entries(featureKeys).map(([key, label]) => {
        const item = value[key as keyof CourseFeatures];

        return (
          <div key={key} className="p-4 border rounded bg-gray-50 space-y-4">
            <h3 className="font-semibold text-lg">{label}</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm">Title (EN)</label>
                <input
                  type="text"
                  value={getSafeField("en", item?.title)}
                  onChange={(e) =>
                    handleChange(
                      key as keyof CourseFeatures,
                      "title",
                      "en",
                      e.target.value
                    )
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm">Title (AR)</label>
                <input
                  type="text"
                  value={getSafeField("ar", item?.title)}
                  onChange={(e) =>
                    handleChange(
                      key as keyof CourseFeatures,
                      "title",
                      "ar",
                      e.target.value
                    )
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm">Description (EN)</label>
                <textarea
                  value={getSafeField("en", item?.description)}
                  onChange={(e) =>
                    handleChange(
                      key as keyof CourseFeatures,
                      "description",
                      "en",
                      e.target.value
                    )
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm">Description (AR)</label>
                <textarea
                  value={getSafeField("ar", item?.description)}
                  onChange={(e) =>
                    handleChange(
                      key as keyof CourseFeatures,
                      "description",
                      "ar",
                      e.target.value
                    )
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm">Icon URL</label>
                <input
                  type="text"
                  value={getSafeIcon(item)}
                  onChange={(e) =>
                    handleChange(
                      key as keyof CourseFeatures,
                      "icon",
                      "",
                      e.target.value
                    )
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
