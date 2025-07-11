"use client";

import { contactFormAction } from "@/app/lib/contact";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";

type InitialType = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

const initialState: InitialType = {
  success: false,
  message: "",
  fieldErrors: {},
};

export default function ContactForm() {
  const [state, formAction] = useFormState(contactFormAction, initialState);
  const t = useTranslations("contact");

  return (
    <div className="bg-gray-50 p-8 rounded shadow">
      <h2 className="text-xl font-semibold mb-6 text-right">
        {t("form.title")}
      </h2>

      {state.message && (
        <div
          className={`mb-4 p-3 rounded text-sm ${
            state.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
          role="alert"
          aria-live="polite"
        >
          {state.message}
        </div>
      )}

      <form className="space-y-4" action={formAction}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block mb-1 text-sm text-gray-700">
              {t("form.fullName")} *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder={t("form.fullNamePlaceholder")}
              required
              className="border border-gray-200 outline-gray-400 bg-white p-3 rounded w-full"
            />
            {state.fieldErrors?.fullName && (
              <p className="text-red-600 text-sm mt-1">
                {state.fieldErrors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-700">
              {t("form.email")} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              className="border border-gray-200 outline-gray-400 bg-white p-3 rounded w-full"
            />
            {state.fieldErrors?.email && (
              <p className="text-red-600 text-sm mt-1">
                {state.fieldErrors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm text-gray-700">
              {t("form.phone")}
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="+971XXXXXXXX"
              pattern="^\+?[1-9]\d{7,14}$"
              className="border border-gray-200 outline-gray-400 bg-white p-3 rounded w-full"
              dir="ltr"
            />
          </div>

          <div>
            <label htmlFor="inquiryType" className="block mb-1 text-sm text-gray-700">
              {t("form.inquiryType")}
            </label>
            <input
              id="inquiryType"
              name="inquiryType"
              type="text"
              placeholder={t("form.inquiryTypePlaceholder")}
              className="border border-gray-200 outline-gray-400 bg-white p-3 rounded w-full"
            />
          </div>
        </div>
        {state.fieldErrors?.phone && (
          <p className="text-red-600 text-sm mt-1">{state.fieldErrors.phone}</p>
        )}

        <div>
          <label htmlFor="subject" className="block mb-1 text-sm text-gray-700">
            {t("form.subject")} *
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder={t("form.subjectPlaceholder")}
            required
            className="border border-gray-200 outline-gray-400 bg-white p-3 rounded w-full"
          />
          {state.fieldErrors?.subject && (
            <p className="text-red-600 text-sm mt-1">
              {state.fieldErrors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm text-gray-700">
            {t("form.message")} *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("form.messagePlaceholder")}
            required
            className="border border-gray-200 outline-gray-400 bg-white p-3 rounded w-full h-32 resize-none"
          ></textarea>
          {state.fieldErrors?.message && (
            <p className="text-red-600 text-sm mt-1">
              {state.fieldErrors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-yellow-400 text-white py-3 px-6 rounded hover:bg-yellow-500 transition"
        >
          {t("form.submit")}
        </button>
      </form>
    </div>
  );
}
