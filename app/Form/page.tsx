// components/UploadComponent.tsx
"use client";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { useState } from "react"; 

export default function UploadComponent() {
  const [file, setFile] = useState<File | null>(null);
  const { uploadMedia, uploading, url, error } = useCloudinaryUploader();

  const handleUpload = async () => {
    if (file) {
      const uploadedUrl = await uploadMedia(file);
      if (uploadedUrl) {
        // You can now save uploadedUrl to Firestore
        console.log("Media uploaded:", uploadedUrl);
      }
    }
  };

  return (
    <div className="p-4 border rounded shadow pt-20 h-screen grid place-items-center text-gray-800">
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {url && (
        <p className="text-green-600 mt-2">
          ✅ Uploaded: <a href={url} target="_blank">{url}</a>
        </p>
      )}
    </div>
  );
}
