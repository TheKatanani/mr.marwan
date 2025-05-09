"use client"; 
import Link from "next/link";
import { useState } from "react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const FloatingWhatsAppButton = () => {
  const [hasUnread, setHasUnread] = useState(true);
  const phoneNumber = "1234567890";
  const defaultMessage = "Hello! I have a question about your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
        onClick={() => setHasUnread(false)}
      >
        <WhatsAppIcon size={28} />
        {hasUnread && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
      </Link>
      <div className="absolute right-16 bottom-2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        تواصل معنا عبر واتساب
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;