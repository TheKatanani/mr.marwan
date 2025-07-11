import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default async function ContactHeader() {
  const t = await getTranslations("contact");

  return (
    <section className="relative h-[500px] text-white flex items-center justify-start px-4 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/contact-image.png"
        alt={t("imageAlt")}
        width={1920}
        height={600}
      />
      <div className="bg-gradient-to-l from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] opacity-65 absolute inset-0" />
      <div className="text-start relative">
        <h1 className="text-4xl font-bold">
          {t("heading.before")}{" "}
          <span className="text-yellow-300">{t("heading.highlight")}</span>
        </h1>
        <p className="mt-4 text-sm">{t("description")}</p>
        <div className="mt-4 text-sm text-end">
          <p dir="ltr">
            <FaPhoneAlt className="text-yellow-400 inline mx-2" /> +1(553) 123-4567 | 
            <FaEnvelope className="text-yellow-400 inline mx-2" /> info@skywings.academy
          </p>
        </div>
      </div>
    </section>
  );
}
