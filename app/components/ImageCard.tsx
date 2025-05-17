"use client";

import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  uploading?: boolean;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
  uploadId: string;
  error?: string;
  width?: number;
  height?: number;
};

function ImageCard({
  imageUrl,
  uploading = false,
  onUpload,
  onDelete,
  uploadId,
  error,
  width,
  height,
}: Props) {
  return (
    <div className="w-fit relative group rounded-lg border bg-gray-50 p-2 shadow-sm hover:shadow-md transition-shadow">
      <input
        type="file"
        accept="image/*"
        id={uploadId}
        className="hidden"
        onChange={onUpload}
      />

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Uploaded preview"
          className="w-fit h-24 object-contain rounded"
          width={width || 150}
          height={height || 150}
        />
      ) : (
        <div className="w-full h-24 flex items-center justify-center rounded border border-dashed text-gray-400 text-sm bg-white">
          No image uploaded
        </div>
      )}

      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <label
          htmlFor={uploadId}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded shadow cursor-pointer"
        >
          {uploading ? "Uploading..." : "Upload"}
        </label>

        {imageUrl && onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded shadow"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageCard;
