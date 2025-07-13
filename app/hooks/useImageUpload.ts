'use client';

import { useState, useEffect } from 'react';
import { useCloudinaryUploader } from '@/app/hooks/useCloudinaryUploader';

type UseImageUploadProps = {
  getImageUrl: () => string;
  setImageUrl: (url: string) => void;
  fetchImageUrl?: () => Promise<string>;
  updateImageUrl?: (url: string) => Promise<void>;
  removeImageUrl?: () => Promise<void>;
};

export const useImageUpload = ({
  getImageUrl,
  setImageUrl,
  fetchImageUrl,
  updateImageUrl,
  removeImageUrl,
}: UseImageUploadProps) => {
  const { uploadMedia } = useCloudinaryUploader();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [loading, setLoading] = useState(!!fetchImageUrl);

  useEffect(() => {
    const fetch = async () => {
      if (!fetchImageUrl) return;
      const url = await fetchImageUrl();
      setImageUrl(url);
      setLoading(false);
    };
    fetch();
  }, [fetchImageUrl, setImageUrl]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError('');

    try {
      const url = await uploadMedia(file);
      if (url) {
        setImageUrl(url);
        updateImageUrl && (await updateImageUrl(url));
      } else {
        setUploadError('Upload failed.');
      }
    } catch {
      setUploadError('Something went wrong during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = async () => {
    setImageUrl('');
    removeImageUrl && (await removeImageUrl());
  };

  return {
    imageUrl: getImageUrl(),
    isUploading,
    uploadError,
    loading,
    handleUpload,
    handleRemove,
  };
};
