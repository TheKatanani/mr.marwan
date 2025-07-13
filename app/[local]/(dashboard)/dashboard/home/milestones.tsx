"use client";

import { useEffect, useState } from "react";
import {
  getMilestonesData,
  updateMilestonesData,
} from "@/app/lib/home/milestones";
import { MilestonesData, MilestoneItem } from "@/types/milestones";
import ImageCard from "@/app/components/ImageCard";
import { useImageUpload } from "@/app/hooks/useImageUpload";

export default function MilestonesDashboardPage() {
  const [data, setData] = useState<MilestonesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (path: string, value: any) => {
    setData((prev) => {
      if (!prev) return prev;
      const keys = path.split(".");
      const updated = structuredClone(prev);

      let current: any = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        current[key] = Array.isArray(current[key])
          ? [...current[key]]
          : { ...current[key] };
        current = current[key];
      }
      current[keys[keys.length - 1]] = value;

      return updated;
    });
  };

  const { imageUrl, isUploading, uploadError, handleUpload, handleRemove } =
    useImageUpload({
      getImageUrl: () => data?.backgroundImage || "",
      setImageUrl: (url) => handleChange("backgroundImage", url),
    });

  useEffect(() => {
    (async () => {
      try {
        const fetchedData = await getMilestonesData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load milestones:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSubmit = async () => {
    if (!data) return;
    setSaving(true);
    try {
      await updateMilestonesData(data);
      setMessage("Saved successfully ✅");
    } catch (err) {
      console.error("Save failed:", err);
      setMessage("Save failed ❌");
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const removeMilestone = (index: number) => {
    if (!data) return;
    const updated = [...data.milestones];
    updated.splice(index, 1);
    handleChange("milestones", updated);
  };

  if (loading || !data) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Edit Milestones Section</h1>

      {/* Title and Subtitle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="border px-4 py-2 rounded"
          placeholder="Title (EN)"
          value={data.title.en}
          onChange={(e) => handleChange("title.en", e.target.value)}
        />
        <input
          className="border px-4 py-2 rounded"
          placeholder="Title (AR)"
          value={data.title.ar}
          onChange={(e) => handleChange("title.ar", e.target.value)}
        />
        <input
          className="border px-4 py-2 rounded"
          placeholder="Subtitle (EN)"
          value={data.subtitle.en}
          onChange={(e) => handleChange("subtitle.en", e.target.value)}
        />
        <input
          className="border px-4 py-2 rounded"
          placeholder="Subtitle (AR)"
          value={data.subtitle.ar}
          onChange={(e) => handleChange("subtitle.ar", e.target.value)}
        />
      </div>

      {/* Milestones */}
      <div className="space-y-6">
        {/* Add at top */}
        <button
          onClick={() =>
            handleChange("milestones", [
              {
                date: "",
                label: { en: "", ar: "" },
                countdown: false,
              },
              ...data.milestones,
            ])
          }
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          + Add at Top
        </button>

        {data.milestones?.map((milestone, i) => (
          <div
            key={i}
            className="border border-gray-300 bg-gray-50 p-4 rounded space-y-2"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-gray-700">
                Milestone {i + 1}
              </p>
              <button
                onClick={() => removeMilestone(i)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>

            <input
              className="w-full border px-3 py-2 rounded"
              type="date"
              value={
                milestone.date
                  ? new Date(milestone.date).toISOString().slice(0, 10)
                  : ""
              }
              onChange={(e) =>
                handleChange(`milestones.${i}.date`, e.target.value)
              }
            />
            <input
              className="w-full border px-3 py-2 rounded"
              placeholder="Label (EN)"
              value={milestone.label.en}
              onChange={(e) =>
                handleChange(`milestones.${i}.label.en`, e.target.value)
              }
            />
            <input
              className="w-full border px-3 py-2 rounded"
              placeholder="Label (AR)"
              value={milestone.label.ar}
              onChange={(e) =>
                handleChange(`milestones.${i}.label.ar`, e.target.value)
              }
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={milestone.countdown ?? false}
                onChange={(e) => {
                  const alreadySet = data.milestones.some(
                    (m, idx) => m.countdown && idx !== i
                  );
                  if (!alreadySet || !e.target.checked) {
                    handleChange(
                      `milestones.${i}.countdown`,
                      e.target.checked
                    );
                  }
                }}
              />
              <span>Show Countdown</span>
            </label>

            {/* Add Below This */}
            <button
              onClick={() => {
                const newMilestone: MilestoneItem = {
                  date: "",
                  label: { en: "", ar: "" },
                  countdown: false,
                };
                const updated = [...data.milestones];
                updated.splice(i + 1, 0, newMilestone);
                handleChange("milestones", updated);
              }}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Below
            </button>
          </div>
        ))}

        {/* Add at bottom */}
        <button
          onClick={() => {
            const newMilestone: MilestoneItem = {
              date: "",
              label: { en: "", ar: "" },
              countdown: false,
            };
            handleChange("milestones", [...data.milestones, newMilestone]);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add at Bottom
        </button>
      </div>

      {/* Background Image */}
      <div className="pt-4">
        <h2 className="font-semibold text-gray-700 mb-2">Background Image</h2>
        <ImageCard
          imageUrl={imageUrl}
          uploading={isUploading}
          onUpload={handleUpload}
          onDelete={imageUrl ? handleRemove : undefined}
          uploadId="milestone-bg"
          error={uploadError}
          height={80}
          width={160}
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSubmit}
        disabled={saving}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {saving ? "Saving..." : "Save"}
      </button>

      {message && (
        <p
          className={`font-medium ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
