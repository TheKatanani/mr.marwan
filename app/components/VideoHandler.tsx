'use client';

import { useCloudinaryUploader } from '@/app/hooks/useCloudinaryUploader'; 
import React, { useState } from 'react';

type VideoProps = {
  videoUrl: string;
  field: string;
  handleChange: (field: string, value: string) => void;
};
function Video({ videoUrl, handleChange, field}: VideoProps) {
  const { uploadMedia } = useCloudinaryUploader();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError('');

    try {
      const url = await uploadMedia(file);
      if (url) {
        handleChange(field, url);
      } else {
        setUploadError('Failed to upload video.');
      }
    } catch {
      setUploadError('Something went wrong during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    handleChange(field, '');
  };

  return (
    <div className="space-y-2">
      <label className="block font-medium text-sm text-gray-700">Service Video</label>

      <div className="w-fit relative group rounded-lg border bg-gray-50 p-2 shadow-sm hover:shadow-md transition-shadow">
        <input
          type="file"
          accept="video/*"
          className="hidden"
          id="videoUpload"
          onChange={handleUpload}
        />

        {videoUrl ? (
          <video
            src={videoUrl}
            controls
            className="h-48 rounded object-cover border bg-black"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center rounded border border-dashed text-gray-400 text-sm bg-white">
            No video uploaded
          </div>
        )}

        {uploadError && (
          <p className="text-red-500 text-xs mt-2">{uploadError}</p>
        )}

        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <label
            htmlFor="videoUpload"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded shadow cursor-pointer"
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </label>
          {videoUrl && (
            <button
              type="button"
              onClick={handleRemove}
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded shadow"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
