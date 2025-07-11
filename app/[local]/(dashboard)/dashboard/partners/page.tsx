"use client";

import { useEffect, useState } from "react";
import ImageCard from "@/app/components/ImageCard";
import { useCloudinaryUploader } from "@/app/hooks/useCloudinaryUploader";
import { Partner } from "@/types/servece";
import {
  addPartner,
  deletePartner,
  getPartners,
  updatePartner,
} from "@/app/lib/partnersOperations";

export default function PartnersForm() {
  const [partners, setPartners] = useState<(Partner & { id: string })[]>([]);
  const [newPartner, setNewPartner] = useState<Partner>({ logo: "", link: "" });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const { uploadMedia } = useCloudinaryUploader();

  const fetchData = async () => {
    const data = await getPartners();
    setPartners(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError("");
    try {
      const url = await uploadMedia(file);
      if (url) setNewPartner((prev) => ({ ...prev, logo: url }));
      else setUploadError("فشل في رفع الصورة");
    } catch {
      setUploadError("حدث خطأ أثناء الرفع");
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddPartner = async () => {
    if (!newPartner.logo) return alert("الرجاء رفع الشعار");
    await addPartner(newPartner);
    setNewPartner({ logo: "", link: "" });
    fetchData();
  };

  const handleUpdatePartner = async (id: string, updated: Partner) => {
    await updatePartner(id, updated);
    fetchData();
  };

  const handleDeletePartner = async (id: string) => {
    if (confirm("هل أنت متأكد من حذف هذا الشريك؟")) {
      await deletePartner(id);
      fetchData();
    }
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
            onUpload={handleUpload}
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
            value={newPartner.link || ""}
            onChange={(e) =>
              setNewPartner({ ...newPartner, link: e.target.value })
            }
            className="w-full border px-3 py-2 rounded mt-2"
          />

          <button
            className="btn-primary mt-4 w-full"
            onClick={handleAddPartner}
            disabled={isUploading}
          >
            إضافة الشريك
          </button>
        </div>

        {/* Existing Partners */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">الشركاء الحاليون</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="border text-center m-auto p-4 rounded relative"
              >
                <ImageCard
                  imageUrl={partner.logo}
                  uploading={false}
                  onUpload={async (e: React.ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    try {
                      const url = await uploadMedia(file);
                      if (url) {
                        await handleUpdatePartner(partner.id, {
                          ...partner,
                          logo: url,
                        });
                      }
                    } catch (error) {
                      console.error("Image upload error:", error);
                    }
                  }}
                  onDelete={() =>
                    handleUpdatePartner(partner.id, { ...partner, logo: "" })
                  }
                  uploadId={`partner-${partner.id}`}
                />

                <p className="mt-2 text-sm break-words">{partner.link}</p>

                <button
                  onClick={() => handleDeletePartner(partner.id)}
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
