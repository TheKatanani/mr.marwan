"use client";

import { useState } from "react";
import { Course } from "@/types/course";
import LocalizedList from "../../LocalizedList";
import FAQList from "../../FAQsList";
import GeneralInfoForm from "./GeneralInfoForm";
import HeroSectionForm from "./HeroSectionForm";
import CourseDescriptionForm from "./CourseDescriptionForm";
import VideoSectionForm from "./VideoForm";
import LocalizedTitleDescriptionList from "../../LocalizedTitleDescriptionList";
import CourseFeatureFields from "../../CourseFeatureFields";
interface Props {
  form: Course;
  setForm: React.Dispatch<React.SetStateAction<Course>>;
  onSubmit: (form: Course) => void;
  saving: boolean;
  submitLabel?: string;
  tabbed?: boolean;
}
const tabs = [
  "General",
  "Hero",
  "Features",
  "Description",
  "Video",
  "Learning",
  "FAQs",
];

export default function CourseForm({
  form,
  setForm,
  onSubmit,
  saving,
  submitLabel = "Save",
  tabbed = true,
}: Props) {
  const [activeTab, setActiveTab] = useState("General");

  const handleChange = (path: string, value: any) => {
    setForm((prev: any) => {
      const updated = { ...prev };
      const keys = path.split(".");
      let obj = updated;
      while (keys.length > 1) {
        const key = keys.shift()!;
        obj[key] = { ...obj[key] };
        obj = obj[key];
      }
      obj[keys[0]] = value;
      return updated;
    });
  };

  return (
    <div className="space-y-6 text-gray-800">
      {tabbed && (
        <div className="flex space-x-2 border-b pb-2 mb-4 text-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-t ${
                tab === activeTab ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {!tabbed || activeTab === "General" ? (
        <GeneralInfoForm form={form} handleChange={handleChange} />
      ) : null}
      {activeTab === "Hero" ? (
        <HeroSectionForm form={form} handleChange={handleChange} />
      ) : null}
      {activeTab === "Features" ? (
        <CourseFeatureFields
          value={form.features}
          onChange={(updatedFeatures) =>
            handleChange("features", updatedFeatures)
          }
        />
      ) : null}
      {activeTab === "Description" ? (
        <CourseDescriptionForm form={form} handleChange={handleChange} />
      ) : null}
      {activeTab === "Video" ? (
        <VideoSectionForm form={form} handleChange={handleChange} />
      ) : null}
      {activeTab === "Learning" ? (
        <div className="space-y-4">
          <LocalizedTitleDescriptionList
            label="What You Will Learn"
            value={form.what_you_will_learn}
            onChange={(val) => handleChange("what_you_will_learn", val)}
          />

          <LocalizedList
            label="Goals"
            value={form.goals}
            onChange={(val) => handleChange("goals", val)}
          />

          <LocalizedTitleDescriptionList
            label="Target Users"
            value={form.target_users}
            onChange={(val) => handleChange("target_users", val)}
          />
        </div>
      ) : null}
      {activeTab === "FAQs" ? (
        <FAQList
          label="FAQs"
          value={form.faqs}
          onChange={(val) => handleChange("faqs", val)}
        />
      ) : null}

      <div className="pt-6">
        <button
          onClick={() => onSubmit(form)}
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {saving ? "Saving..." : submitLabel}
        </button>
      </div>
    </div>
  );
}
