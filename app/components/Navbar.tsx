/** @format */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import Container from "./Container";
import { navLinks } from "@/mock/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="w-full fixed top-0 right-0 z-50 text-xl px-5 py-2 shadow  bg-cover bg-center"
      style={{ backgroundImage: "url('/web-banner-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-950 opacity-50 z-0"></div>
      <Container>
        <div className="container mx-auto flex items-center justify-between md:p-4 z-1 relative">
          {/* Logo on the right */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={140} height={60} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, highlight }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-pink-500 transition ${
                  highlight ? "text-pink-600 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div></div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <CloseIcon className="h-8 w-8 text-white" />
              ) : (
                <MenuIcon className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white shadow-md z-20 relative">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={toggleMenu}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
