// app/components/StandardForm/StandardForm.tsx
"use client";

import { useState } from "react";
import { Standard } from "@/types/standard";
import HeroForm from "./HeroForm";
import AboutForm from "./AboutForm";
import StructureForm from "./StructureForm";
import GeneralInfoForm from "./GeneralInfo";

interface Props {
  form: Standard;
  handleChange: (path: string, value: any) => void;
  handleSubmit: () => void;
  saving: boolean;
}

export default function StandardForm({
  form,
  handleChange,
  handleSubmit,
  saving,
}: Props) {
  const [tab, setTab] = useState("hero");

  const renderTab = () => {
    switch (tab) {
      case "general":
        return <GeneralInfoForm form={form} handleChange={handleChange} />;
      case "hero":
        return <HeroForm form={form} handleChange={handleChange} />;
      case "about":
        return <AboutForm form={form} handleChange={handleChange} />;
      case "structure":
        return <StructureForm form={form} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTab("general")}
          className={`px-4 py-2 rounded ${
            tab === "general" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          General Info
        </button>
        <button
          onClick={() => setTab("hero")}
          className={`px-4 py-2 rounded ${
            tab === "hero" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Hero
        </button>
        <button
          onClick={() => setTab("about")}
          className={`px-4 py-2 rounded ${
            tab === "about" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setTab("structure")}
          className={`px-4 py-2 rounded ${
            tab === "structure" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Structure
        </button>
      </div>

      <div className="space-y-4">
        {renderTab()}
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {saving ? "Saving..." : "Save Standard"}
        </button>
      </div>
    </div>
  );
}
