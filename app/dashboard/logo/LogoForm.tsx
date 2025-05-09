'use client';

import { useEffect, useState } from 'react';
import { useCloudinaryUploader } from '@/app/hooks/useCloudinaryUploader';
import { doc, getDoc, setDoc } from 'firebase/firestore'; 
import ImageCard from '@/app/components/ImageCard';
import { db } from '@/app/lib/firebase';
import { fetchLogoUrl, removeLogoUrl, updateLogoUrl } from '@/app/lib/logo';

function LogoForm() {
  const { uploadMedia } = useCloudinaryUploader();
  const [logoUrl, setLogoUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLogo = async () => {
      const logo = await fetchLogoUrl();
      setLogoUrl(logo);
      setLoading(false);
    };
    getLogo();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError('');

    try {
      const url = await uploadMedia(file);
      if (url) {
        setLogoUrl(url);
        await updateLogoUrl(url);
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
    setLogoUrl('');
    await removeLogoUrl();
  };
  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <label className="block font-medium text-sm text-gray-700">Site Logo</label>

      <ImageCard
        imageUrl={logoUrl}
        uploading={isUploading}
        error={uploadError}
        onUpload={handleImageUpload}
        onDelete={handleRemove}
        height={60}
        width={120}
        uploadId="site-logo"
      />
    </div>
  );
}

export default LogoForm;
