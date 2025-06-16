"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import Container from "./Container";
import { navLinks } from "@/mock/data";
import { fetchLogoUrl } from "../lib/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    (async function fetchLogo(){
      const logo:string = await fetchLogoUrl();
      setLogoUrl(logo);
    })()
  },[])

  return (
    <nav
      className="w-full bg-white text-black fixed top-0 right-0 z-50 text-xl px-5 py-2 shadow bg-cover bg-center"
    > 
      <Container>
        <div className="container mx-auto flex items-center justify-between md:p-4 z-1 relative">
          {/* Logo on the right */}
          <Link href="/" className="flex items-center">
            <Image src={logoUrl ||"/logo.png"} className="h-[50] w-auto object-contain" alt="Logo" width={120} height={50} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, highlight }) => {
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
          </div>
          <div></div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <CloseIcon className="h-8 w-8 text-black" />
              ) : (
                <MenuIcon className="h-8 w-8 text-black" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
