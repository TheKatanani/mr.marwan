/** @format */

"use client";

import ImageCard from "@/app/components/ImageCard";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { Partner, Service } from "@/types/servece";
import React, { useState } from "react";

type Props = {
  partners: Partner[];
  handleChange: <K extends keyof Service>(field: K, value: Service[K]) => void;
};

function Partners({ partners, handleChange }: Props) {
  const [newPartner, setNewPartner] = useState<Partner>({ logo: "", link: "" });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const { uploadMedia } = useCloudinaryUploader();

  const handleNewPartnerUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError("");

    try {
      const url = await uploadMedia(file);
      if (url) {
        setNewPartner((prev) => ({ ...prev, logo: url }));
      } else {
        setUploadError("فشل في رفع الصورة");
      }
    } catch {
      setUploadError("حدث خطأ أثناء الرفع");
    } finally {
      setIsUploading(false);
    }
  };

  const handlePartnerImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await uploadMedia(file);
      if (url) {
        const updated = [...partners];
        updated[index].logo = url;
        handleChange("partners", updated);
      }
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  const handleDeletePartnerImage = (index: number) => {
    const updated = [...partners];
    updated[index].logo = "";
    handleChange("partners", updated);
  };

  const handleLinkChange = (index: number, value: string) => {
    const updated = [...partners];
    updated[index].link = value;
    handleChange("partners", updated);
  };

  const handleRemovePartner = (index: number) => {
    const updated = [...partners];
    updated.splice(index, 1);
    handleChange("partners", updated);
  };

  const handleAddPartner = () => {
    if (!newPartner.logo) return;
    let updated;
    if (Array.isArray(partners)) updated = [...partners, newPartner];
    else updated = [newPartner];

    handleChange("partners", updated);
    setNewPartner({ logo: "", link: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">إدارة الشركاء</h1>

      <div className="space-y-4">
        {/* Add New Partner */}
        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">إضافة شريك جديد</h2>

          <ImageCard
            imageUrl={newPartner.logo}
            uploading={isUploading}
            onUpload={handleNewPartnerUpload}
            onDelete={
              newPartner.logo
                ? () => setNewPartner((prev) => ({ ...prev, logo: "" }))
                : undefined
            }
            uploadId="newPartnerLogo"
            error={uploadError}
          />

          <input
            type="text"
            placeholder="رابط الشريك (اختياري)"
            value={newPartner.link}
            onChange={(e) =>
              setNewPartner({ ...newPartner, link: e.target.value })
            }
            className="w-full border px-3 py-2 rounded mt-2"
          />

          <button
            className="btn-primary mt-4 w-full"
            onClick={handleAddPartner}
            disabled={isUploading || !newPartner.logo}
            type="button"
          >
            إضافة الشريك
          </button>
        </div>

        {/* Existing Partners */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">الشركاء الحاليون</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partners &&
              partners.map((partner, index) => (
                <div
                  key={index}
                  className="border text-center m-auto p-4 rounded relative"
                >
                  <ImageCard
                    imageUrl={partner.logo}
                    uploading={false}
                    onUpload={(e) => handlePartnerImageUpload(e, index)}
                    onDelete={() => handleDeletePartnerImage(index)}
                    uploadId={`partner-${index}`}
                  />

                  <input
                    type="text"
                    value={partner.link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                    placeholder="رابط الشريك"
                    className="w-full border px-3 py-2 rounded mt-2"
                  />

                  <button
                    onClick={() => handleRemovePartner(index)}
                    className="absolute top-1 right-1 text-white p-2 rounded bg-red-500 hover:bg-red-600 text-sm"
                  >
                    حذف
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
