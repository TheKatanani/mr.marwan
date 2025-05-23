'use client';

import { useState, useEffect } from 'react';
import { HeroSectionData } from '@/types/home';
import Video from '@/app/components/VideoHandler';
import { fetchHeroSection, updateHeroSection } from '@/app/lib/home/hero';

const HeroDashboard = () => {
  const [formData, setFormData] = useState<HeroSectionData>({
    title: '',
    subtitle: '',
    ctaText: '',
    ctaLink: '',
    backgroundVideoUrl: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchHeroSection();
      if (data) setFormData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleChange = (field: keyof HeroSectionData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleVideoChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    await updateHeroSection(formData);
    alert('تم تحديث قسم الهيرو بنجاح');
  };

  if (loading)
    return <div className="text-center py-10 text-gray-500">جاري التحميل...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">تحديث قسم الهيرو</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">العنوان الرئيسي</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className="block mb-1 font-medium">العنوان الفرعي</label>
          <input
            type="text"
            value={formData.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* CTA Text */}
        <div>
          <label className="block mb-1 font-medium">نص زر الدعوة (CTA)</label>
          <input
            type="text"
            value={formData.ctaText}
            onChange={(e) => handleChange('ctaText', e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* CTA Link */}
        <div>
          <label className="block mb-1 font-medium">رابط زر الدعوة (CTA)</label>
          <input
            type="text"
            value={formData.ctaLink}
            onChange={(e) => handleChange('ctaLink', e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* Background Video */}
        <Video
          field="backgroundVideoUrl"
          videoUrl={formData.backgroundVideoUrl}
          handleChange={handleVideoChange}
        />

        {/* Save Button */}
        <button
          type="submit"
          className="w-full btn-primary"
        >
          {loading ? 'جاري الحفظ...' : 'حفظ التعديلات'}
        </button>
      </form>
    </div>
  );
};

export default HeroDashboard;
