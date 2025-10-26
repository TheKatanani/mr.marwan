"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Standard } from "@/types/standard";
import { getStandardById, updateStandard } from "@/app/lib/standards";
import StandardForm from "@/app/components/standerds/forms/StandardForm";import { defaultStandard } from "@/app/[local]/(dashboard)/dashboard/standards/defaultStandard";

export default function EditStandardPageClient({ id }: { id: string }) {
  const [form, setForm] = useState<Standard>(defaultStandard);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const data = await getStandardById(id);
      if (data) setForm(data);
      setLoading(false);
    }
    if (id) fetchData();
  }, [id]);

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
      await updateStandard(id, form);
      router.push("/dashboard/standards");
    } catch {
      alert("Error updating standard");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Edit Standard</h1>
      <StandardForm
        form={form}
        handleSubmit={handleSubmit}
        saving={saving}
        handleChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        disabled={saving}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {saving ? "Saving..." : "Update Standard"}
      </button>
    </div>
  );
}
