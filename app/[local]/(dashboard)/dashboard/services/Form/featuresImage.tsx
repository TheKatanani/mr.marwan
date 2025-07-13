'use client';

import React, { useState } from 'react';
import { useCloudinaryUploader } from '@/app/hooks/useCloudinaryUploader';
import { Service } from '@/types/servece'; 
import ImageCard from '@/app/components/ImageCard';

type HeaderImageProps = {
  featuresImage: string;
  handleChange: <K extends keyof Service>(field: K, value: Service[K]) => void;
};

function FeaturesImage({ featuresImage, handleChange }: HeaderImageProps) {
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
        handleChange('featuresImage', url);
      } else {
        setUploadError('Failed to upload image.');
      }
    } catch {
      setUploadError('Something went wrong during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    handleChange('featuresImage', '');
  };

  return (
    <div className="space-y-2">
      <label className="block font-medium text-sm text-gray-700">Header Image</label>
      <div className="w-full max-w-md">
        <ImageCard
          imageUrl={featuresImage}
          uploading={isUploading}
          onUpload={handleUpload}
          onDelete={featuresImage ? handleRemove : undefined}
          uploadId="featuresImageUpload"
          error={uploadError}
        />
      </div>
    </div>
  );
}

export default FeaturesImage;
