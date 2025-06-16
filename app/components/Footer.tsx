import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/mock/data"; // Adjust the import path as needed
import { fetchFooter } from "../lib/footer";
import { getSocialLinks } from "../lib/socialMedia";
import { TfiEmail } from "react-icons/tfi";

export default async function Footer() {
  const footerData = await fetchFooter();
  const socialLinks = await getSocialLinks();
  return (
    <footer className="relative bg-[#111827] bg-center h-full text-white pt-12 pb-10">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 grid opacity-50 place-content-center">
        <Image src={"/plane.png"} alt="plane" width={700} height={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right "
          dir="ltr"
        >
          {/* Logo + Description */}
          <div className="space-y-4">
            <div className="mb-4 ">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={100}
                className="mx-auto md:mx-0 w-auto   m-auto"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة. لقد تم توليد
              هذا النص من مولد النص العربي.
            </p>
          </div>

          {/* Quick Links - Dynamic from navLinks */}
          <div className="space-y-4 text-center md:text-start">
            <h3 className="text-lg font-semibold mb-4 text-white text-center md:text-end">
              روابط سريعة
            </h3>
            <div className="flex flex-col gap-4 items-center md:items-end">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-480 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone & Email */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="text-right">
                <div className="text-gray-300 text-sm">{footerData?.email}</div>
              </div>
              <TfiEmail size={25} />
            </div>

            {/* Address */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <span className="text-gray-300 text-sm">
                {footerData?.address}
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

            {/* Social Media - Dynamic */}
            <div className="flex justify-center md:justify-end mt-4  gap-1">
              {socialLinks?.whatsapp && (
                <Link
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="whatsapp"
                    src="/whatsapp.svg"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </Link>
              )}
              {socialLinks?.facebook && (
                <Link
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="facebook"
                    src="/facebook.svg"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </Link>
              )}
              {socialLinks?.instagram && (
                <Link
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="instagram"
                    src="/instagram.svg"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </Link>
              )}
              {socialLinks?.tiktok && (
                <Link
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="tiktok"
                    src="/tiktok.svg"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </Link>
              )}
              {socialLinks?.twitter && (
                <Link
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="twitter"
                    src="/twitter.svg"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </Link>
              )}
              {socialLinks?.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="linkedin"
                    src="/linkedin.svg"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
