import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import { getContactInfo } from "@/app/lib/contact"; // Firebase call (see below)

export default async function ContactInfo() {
  const t = await getTranslations("contact.info");
  const contact = await getContactInfo();

  return (
    <div className="bg-[#1877F2] text-white p-6 rounded-2xl shadow space-y-6 w-full">
      <h2 className="text-lg font-semibold">{t("title")}</h2>

      <div className="space-y-4 text-sm">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-yellow-400 mt-1" />
          <div>
            <p className="font-medium">{t("phone")}</p>
            <p>{contact.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-400 mt-1" />
          <div>
            <p className="font-medium">{t("email")}</p>
            <p>{contact.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-yellow-400 mt-1" />
          <div>
            <p className="font-medium">{t("address")}</p>
            <p>{contact.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-yellow-400 mt-1" />
          <div>
            <p className="font-medium">{t("whatsapp")}</p>
            <p>{contact.whatsapp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
