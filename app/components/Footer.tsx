import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/mock/data";
import { fetchFooter } from "../lib/footer";
import { getSocialLinks } from "../lib/socialMedia";
import { TfiEmail } from "react-icons/tfi";
import { getLocale, getTranslations } from "next-intl/server";
import { LocalizedField } from "@/types";

export default async function Footer() {
  const footerData = await fetchFooter();
  const socialLinks = await getSocialLinks();
  const locale = await getLocale();
  const tNavbar = await getTranslations("Navbar");
  const tFooter = await getTranslations("footer");

  return (
    <footer className="relative bg-[#111827] bg-center h-full text-white pt-12 pb-10">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 grid opacity-50 place-content-center">
        <Image
          src={"/plane.png"}
          alt="plane"
          width={700}
          height={400}
          className="h-70 w-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right" dir="ltr">
          {/* Logo + Paragraph */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={100}
                className="mx-auto md:mx-0 w-auto h-25 m-auto"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              {footerData?.paragraph?.[locale as keyof LocalizedField] || ""}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-start">
            <h3 className="text-lg font-semibold mb-4 text-white text-center md:text-end">
              {tFooter("linkesTitle")}
            </h3>
            <div className="flex flex-col gap-4 items-center md:items-end">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-480 text-sm"
                >
                  {tNavbar(link.label as keyof typeof tNavbar)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="text-right">
                <div className="text-gray-300 text-sm">{footerData?.email}</div>
              </div>
              <TfiEmail size={25} />
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3">
              <span className="text-gray-300 text-sm">
                {footerData?.address?.[locale as keyof LocalizedField] || ""}
              </span>
              <svg
                className="w-8 h-8 text-[#B6D8E2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7z"
                />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-end mt-4 gap-1">
              {Object.entries(socialLinks || {}).map(([key, href]) => (
                href && (
                  <Link
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt={key}
                      src={`/${key}.svg`}
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
