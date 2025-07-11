'use client';
import ImageCard from "@/app/components/ImageCard";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { fetchWhyAcademy, updateWhyAcademy } from "@/app/lib/home/whyAcademy";
import { WhyAcademySectionData } from "@/types/home";
import { useEffect, useState } from "react";

 
export default function WhyAcademy() {
  const [form, setForm] = useState<WhyAcademySectionData>({
    title: '',
    description: '',
    imageUrl: '',
  });

  const { uploadMedia, uploading } = useCloudinaryUploader();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = <K extends keyof WhyAcademySectionData>(
    field: K,
    value: WhyAcademySectionData[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError('');

    try {
      const url = await uploadMedia(file);
      if (url) {
        handleChange('imageUrl', url);
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
    handleChange('imageUrl', '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try { 
      await updateWhyAcademy(form)
      alert('تم التحديث بنجاح');
    } catch (err) {
      console.error(err);
      alert('حدث خطأ أثناء التحديث');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWhyAcademy();
      if (data) {
        setForm({
          title: data.title || '',
          description: data.description || '',
          imageUrl: data.imageUrl || '',
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">تحديث قسم "من نحن"</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">العنوان</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الفقرة الأولى</label>
          <textarea
            value={form.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            rows={4}
          />
        </div>

        <ImageCard
          imageUrl={form.imageUrl}
          uploading={isUploading}
          onUpload={handleUpload}
          onDelete={form.imageUrl ? handleRemove : undefined}
          uploadId="headImageUpload"
          error={uploadError}
        />

        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full btn-primary"
        >
          {loading || uploading ? 'جاري التحديث...' : 'تحديث المعلومات'}
        </button>
      </form>
    </div>
  );
}
