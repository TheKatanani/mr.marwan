"use client";

import { Standard } from "@/types/standard";

interface Props {
  form: Standard;
  handleChange: (path: string, value: any) => void;
}

export default function HeroForm({ form, handleChange }: Props) {
  return (
    <div className="space-y-4">
      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Title (EN)"
        value={form.hero.title.en}
        onChange={(e) => handleChange("hero.title.en", e.target.value)}
      />

      <input
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Title (AR)"
        value={form.hero.title.ar}
        onChange={(e) => handleChange("hero.title.ar", e.target.value)}
      />

      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Description (EN)"
        value={form.hero.description.en}
        onChange={(e) => handleChange("hero.description.en", e.target.value)}
      />

      <textarea
        className="w-full border px-4 py-2 rounded"
        placeholder="Hero Description (AR)"
        value={form.hero.description.ar}
        onChange={(e) => handleChange("hero.description.ar", e.target.value)}
      />
    </div>
  );
}
