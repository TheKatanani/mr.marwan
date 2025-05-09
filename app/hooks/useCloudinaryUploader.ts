import { useState } from "react";

type ResourceType = "image" | "video";

export function useCloudinaryUploader() {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadMedia = async (file: File) => {
    const resourceType: ResourceType = file.type.startsWith("video") ? "video" : "image";
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", "your_folder_name"); // Optional

    setUploading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        setUrl(data.secure_url);
        return data.secure_url; // You can store this in Firestore
      } else {
        throw new Error(data.error?.message || "Upload failed");
      }
    } catch (err: any) {
      setError(err.message);
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }

    return null;
  };

  return { uploadMedia, uploading, url, error };
}
