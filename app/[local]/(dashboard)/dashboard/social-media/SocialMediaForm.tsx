/** @format */

"use client";

import { getSocialLinks, updateSocialLinks } from "@/app/lib/socialMedia";
import { SocialLinks } from "@/types/SocialLinks";
import { FormEvent, useEffect, useState } from "react";

export default function SocialMediaForm() {
  // initialData: Partial<SocialLinks>;
  const [initialData, setInitialData] = useState<Partial<SocialLinks>>({});
  const [links, setLinks] = useState<Partial<SocialLinks>>({
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    whatsapp: "",
    ...initialData,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      await updateSocialLinks(links);
      setMessage({ text: "Links updated successfully!", type: "success" });
    } catch (error) {
      console.error("Update failed:", error);
      setMessage({ text: "Failed to update links", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const platforms: (keyof SocialLinks)[] = [
    "facebook",
    "twitter",
    "linkedin",
    "instagram",
    "youtube",
    "tiktok",
    "whatsapp",
  ];
  useEffect(() => {
    (async () => {
      try {
        const data = await getSocialLinks();
        setInitialData(data);
        setLinks((prev) => ({ ...prev, ...data }));
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    })();
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl bg-white p-6 rounded-xl border shadow m-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Social Media Links
      </h2>

      {platforms.map((platform) => (
        <div key={platform} className="flex flex-col gap-1">
          <label
            htmlFor={platform}
            className="capitalize font-medium text-gray-700"
          >
            {platform}
          </label>
          <input
            id={platform}
            type={platform === "whatsapp" ? "string" : "url"}
            value={links[platform] || ""}
            onChange={(e) => setLinks({ ...links, [platform]: e.target.value })}
            placeholder={
              platform === "whatsapp"
                ? "+1234567890"
                : `https://${platform}.com/yourpage`
            }
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      ))}

      {message && (
        <div
          className={`p-3 rounded-md text-sm font-medium ${
            message.type === "success"
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-red-100 text-red-700 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-fit px-5 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isLoading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
