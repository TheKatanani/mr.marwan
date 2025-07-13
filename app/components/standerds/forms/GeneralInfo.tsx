import { Standard } from "@/types/standard";

export default function GeneralInfoForm({ form, handleChange }: { form: Standard; handleChange: (path: string, value: any) => void }) {
  return (
    <div className="space-y-4">
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Name (EN)"
        value={form.name.en}
        onChange={(e) => handleChange("name.en", e.target.value)}
      />
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Name (AR)"
        value={form.name.ar}
        onChange={(e) => handleChange("name.ar", e.target.value)}
      />
      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Short Description (EN)"
        value={form.short_description.en}
        onChange={(e) => handleChange("short_description.en", e.target.value)}
      />
      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Short Description (AR)"
        value={form.short_description.ar}
        onChange={(e) => handleChange("short_description.ar", e.target.value)}
      />
    </div>
  );
}