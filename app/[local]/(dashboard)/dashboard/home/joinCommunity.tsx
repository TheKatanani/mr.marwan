"use client";

import { useEffect, useState } from "react";
import {
  getJoinCommunityData,
  updateJoinCommunityData,
} from "@/app/lib/home/joinCommunity";
import { JoinCommunityData } from "@/types/joinCommunity"; 

export default function JoinCommunityDashboard() {
  const [form, setForm] = useState<JoinCommunityData | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (path: string, value: any) => {
    setForm((prev) => {
      if (!prev) return prev;
      const updated = structuredClone(prev);
      const keys = path.split(".");
      let current: any = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const addStat = () => {
    const newStat = {
      value: "",
      label: { en: "", ar: "" },
    };
    handleChange("video_section.stats", [
      ...form!.video_section.stats,
      newStat,
    ]);
  };

  useEffect(() => {
    getJoinCommunityData().then(setForm);
  }, []);

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      await updateJoinCommunityData(form);
      setMessage("Saved ✅");
    } catch {
      setMessage("Error ❌");
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold">Edit Join Community Section</h1>

      {/* Subtitle & Title */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="border px-4 py-2 rounded w-full"
          placeholder="Title (EN)"
          value={form.video_section.title.en}
          onChange={(e) =>
            handleChange("video_section.title.en", e.target.value)
          }
        />
        <input
          className="border px-4 py-2 rounded w-full"
          placeholder="Title (AR)"
          value={form.video_section.title.ar}
          onChange={(e) =>
            handleChange("video_section.title.ar", e.target.value)
          }
        />
        <input
          className="border px-4 py-2 rounded w-full"
          placeholder="Subtitle (EN)"
          value={form.video_section.subtitle.en}
          onChange={(e) =>
            handleChange("video_section.subtitle.en", e.target.value)
          }
        />
        <input
          className="border px-4 py-2 rounded w-full"
          placeholder="Subtitle (AR)"
          value={form.video_section.subtitle.ar}
          onChange={(e) =>
            handleChange("video_section.subtitle.ar", e.target.value)
          }
        />
      </div>
 

      {/* Stats Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Stats</h2>
          <button
            type="button"
            onClick={addStat}
            className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            + Add Stat
          </button>
        </div>

        {form.video_section.stats.map((stat, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded p-4 bg-gray-50"
          >
            <input
              className="border px-2 py-1 rounded w-full"
              placeholder="Value"
              value={stat.value}
              onChange={(e) =>
                handleChange(`video_section.stats.${idx}.value`, e.target.value)
              }
            />
            <input
              className="border px-2 py-1 rounded w-full"
              placeholder="Label (EN)"
              value={stat.label.en}
              onChange={(e) =>
                handleChange(
                  `video_section.stats.${idx}.label.en`,
                  e.target.value
                )
              }
            />
            <input
              className="border px-2 py-1 rounded w-full"
              placeholder="Label (AR)"
              value={stat.label.ar}
              onChange={(e) =>
                handleChange(
                  `video_section.stats.${idx}.label.ar`,
                  e.target.value
                )
              }
            />
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {saving ? "Saving..." : "Save"}
      </button>
      {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
    </div>
  );
}
