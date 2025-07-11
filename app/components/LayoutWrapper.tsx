import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";
import { FirebaseProvider } from "@/context/FirebaseProvider";
import { AuthProvider } from "@/context/AuthContext";
import { NextIntlClientProvider } from "next-intl";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
    <NextIntlClientProvider> 
      <Navbar />
      <FirebaseProvider>
        <AuthProvider>
          {children}
          <FloatingWhatsAppButton />
        </AuthProvider>
      </FirebaseProvider>
      <Footer />
    </NextIntlClientProvider>
    </>
  );
}
