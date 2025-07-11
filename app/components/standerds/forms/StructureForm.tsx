"use client";

import { Standard } from "@/types/standard";
import LocalizedTitleDescriptionList from "@/app/components/LocalizedTitleDescriptionList";

interface Props {
  form: Standard;
  handleChange: (path: string, value: any) => void;
}

export default function StructureForm({ form, handleChange }: Props) {
  return (
    <div className="space-y-8">
      {/* Theory Section */}
      <div className="space-y-4">
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Theory Title (EN)"
          value={form.structure.theory.title.en}
          onChange={(e) =>
            handleChange("structure.theory.title.en", e.target.value)
          }
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Theory Title (AR)"
          value={form.structure.theory.title.ar}
          onChange={(e) =>
            handleChange("structure.theory.title.ar", e.target.value)
          }
        />
        <LocalizedTitleDescriptionList
          label="Theory Items"
          value={form.structure.theory.items}
          onChange={(val) => handleChange("structure.theory.items", val)}
        />
      </div>

      {/* Practice Section */}
      <div className="space-y-4">
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Practice Title (EN)"
          value={form.structure.practice.title.en}
          onChange={(e) =>
            handleChange("structure.practice.title.en", e.target.value)
          }
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Practice Title (AR)"
          value={form.structure.practice.title.ar}
          onChange={(e) =>
            handleChange("structure.practice.title.ar", e.target.value)
          }
        />
        <LocalizedTitleDescriptionList
          label="Practice Items"
          value={form.structure.practice.items}
          onChange={(val) => handleChange("structure.practice.items", val)}
        />
      </div>
    </div>
  );
}
