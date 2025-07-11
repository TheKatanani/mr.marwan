// app/dashboard/standards/new/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { addStandard } from "@/app/lib/standards";
import StandardForm from "@/app/components/standerds/forms/StandardForm";
import { Standard } from "@/types/standard";
import { defaultStandard } from "../defaultStandard";

export default function NewStandardPage() {
  const [form, setForm] = useState<Standard>(defaultStandard);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

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

  const handleSubmit = async () => {
    setSaving(true);
    try {
      await addStandard(form);
      router.push("/dashboard/standards");
    } catch (error) {
      alert("Error saving standard");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Create New Standard</h1>
      <StandardForm form={form} handleSubmit={handleSubmit} saving={saving} handleChange={handleChange} />
      <button
        onClick={handleSubmit}
        disabled={saving}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {saving ? "Saving..." : "Save Standard"}
      </button>
    </div>
  );
}
