"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Mail, Phone, UserRound } from "lucide-react";
import { addBookUsers } from "../lib/popUp";

export default function Popup() {
  const t = useTranslations("popup");

  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);

    const res = await addBookUsers(formData);

    if (res.success) {
      setSubmitSuccess(t("successMessage"));
      setForm({ name: "", email: "", phone: "" });

      const link = document.createElement("a");
      link.href = "/book.pdf";
      link.download = "book.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setSubmitError(t("errorMessage"));
    }

    setSubmitting(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 text-gray-800">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl w-full">
        <h2 className="text-center font-bold text-xl mb-2">{t("title")}</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col md:flex-row gap-6 p-4">
            {/* Left: Form fields */}
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-sm text-gray-600">{t("description")}</p>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  {t("name.label")} <span className="text-[#FF4D03]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                    <UserRound />
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder={t("name.placeholder")}
                    className="pl-10 pr-4 py-2 border rounded-md w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  {t("email.label")} <span className="text-[#FF4D03]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                    <Mail />
                  </span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder={t("email.placeholder")}
                    className="pl-10 pr-4 py-2 border rounded-md w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  {t("phone.label")} <span className="text-[#FF4D03]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                    <Phone />
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder={t("phone.placeholder")}
                    className="pl-10 pr-4 py-2 border rounded-md w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Image
                src="/book.jpg"
                alt="Popup Visual"
                width={300}
                height={400}
                className="w-full h-auto rounded-xl object-cover max-w-[300px]"
              />
            </div>
          </div>

          {/* Submit + Cancel buttons */}
          <div className="flex flex-col items-center gap-2 pt-4">
            {submitError && <p className="text-red-600">{submitError}</p>}
            {submitSuccess && <p className="text-green-600">{submitSuccess}</p>}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
                onClick={() => setVisible(false)}
                disabled={submitting}
              >
                {t("cancel")}
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
              >
                {submitting ? t("submitting") : t("submit")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
