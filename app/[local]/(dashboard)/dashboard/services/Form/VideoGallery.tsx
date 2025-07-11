import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { Service } from "@/types/servece";
import React from "react";

type VideosGalleryProps = {
  gallery: { images: string[]; videos: string[] };
  handleChange: <K extends keyof Service>(field: K, value: Service[K]) => void;
};

function VideosGallery({ gallery, handleChange }: VideosGalleryProps) {
  const { uploadMedia } = useCloudinaryUploader();
  const { videos } = gallery;

  const updateVideo = (index: number, newUrl: string) => {
    const updated = [...videos];
    updated[index] = newUrl;
    handleChange("gallery", { ...gallery, videos: updated });
  };

  const removeVideo = (index: number) => {
    const updated = [...videos];
    updated.splice(index, 1);
    handleChange("gallery", { ...gallery, videos: updated });
  };

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadMedia(file);
    if (url) updateVideo(index, url);
  };

  const addNewVideo = () => {
    handleChange("gallery", { ...gallery, videos: [...videos, ""] });
  };

  return (
    <div className="space-y-6">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Service Gallery Videos
      </label>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((vid, index) => (
          <div
            key={index}
            className="relative group rounded-lg border bg-gray-50 p-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <input
              type="file"
              accept="video/*"
              className="hidden"
              id={`gallery-video-${index}`}
              onChange={(e) => handleUpload(e, index)}
            />

            {vid ? (
              <video
                src={vid}
                controls
                className="w-full h-48 rounded object-cover border"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center rounded border border-dashed text-gray-400 text-sm bg-white">
                No video uploaded
              </div>
            )}

            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <label
                htmlFor={`gallery-video-${index}`}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded shadow cursor-pointer"
              >
                Upload
              </label>
              <button
                type="button"
                onClick={() => removeVideo(index)}
                className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded shadow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addNewVideo}
        className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
      >
        ➕ Add Video
      </button>
    </div>
  );
}

export default VideosGallery;
