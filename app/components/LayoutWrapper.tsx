import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";
import { FirebaseProvider } from "@/context/FirebaseProvider";
import { AuthProvider } from "@/context/AuthContext";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <FirebaseProvider>
        <AuthProvider>
          {children}
          <FloatingWhatsAppButton />
        </AuthProvider>
      </FirebaseProvider>
      <Footer />
    </>
  );
}
