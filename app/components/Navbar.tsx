"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchLogoUrl } from "../lib/logo";
import { Link } from "@/i18n/navigation";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { getStandards } from "../lib/standards";
import { Standard } from "@/types/standard";
import { LocalizedField } from "@/types";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [standerds, setStandards] = useState<Standard[]>([]);
  const locale = useLocale() as keyof LocalizedField;
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    // { href: "/services", label: t("services") },
    // { href: "/courses", label: t("courses") },
    { href: "/blog", label: t("blog") },
    { href: "/helicopter", label: t("helicopter") },
    { href: "/contact", label: t("contact") },
  ];

  useEffect(() => {
    (async function fetchData() {
      try {
      const [logo, standards] = await Promise.all([
        fetchLogoUrl(),
        getStandards(),
      ]);
      setLogoUrl(logo);
      setStandards(standards);
      } catch   {
      // Optionally handle error
      setLogoUrl("/logo.png");
      setStandards([]);
      }
    })();
  }, []);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav
      className="w-full bg-white text-black fixed top-0 right-0 z-50 text-sm px-5 py-2 shadow bg-cover bg-center"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Container>
        <div className="container mx-auto flex items-center justify-between md:p-4 z-1 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoUrl || "/logo.png"}
              alt="Logo"
              className="h-[40px] w-auto object-contain"
              width={120}
              height={50}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`transition hover:text-[#BB8819] ${
                    isActive ? "text-[#BB8819] font-bold" : "text-black"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="relative group">
              <Link
                href="/courses"
                className={`transition hover:text-[#BB8819] ${
                  pathname === "/courses"
                    ? "text-[#BB8819] font-bold"
                    : "text-black"
                } flex items-center`}
              >
                {t("courses")}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <div className="absolute left-0 top-full min-w-[180px] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-50">
                <div className="flex flex-col py-2">
                  <Link
                    href="/courses"
                    className="px-4 py-2 hover:bg-gray-100 text-black"
                  >
                    {t("allCourses")}
                  </Link> 
                  {/* Example: Map standards from DB */}
                  {/* Replace the below with your fetched standards */}
                  {
                  standerds.map((standard) => (
                    <Link
                      key={standard.id}
                      href={`/training/${standard.id}`}
                      className="px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      {standard.name[locale]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isMobileOpen ? (
                <X className="h-8 w-8 text-black" />
              ) : (
                <Menu className="h-8 w-8 text-black" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-black text-white shadow-md z-20 relative">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={toggleMenu}
                  className={`transition ${
                    isActive ? "text-pink-500 font-bold" : "text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
