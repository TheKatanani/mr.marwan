import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { FirebaseProvider } from "@/context/FirebaseProvider";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "موقع الدكتور مروان العزاوي",
  description: "موقع الدكتور مروان العزاوي الرسمي",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} style={{background:'white'}} dir="rtl">
        <FirebaseProvider>
          <AuthProvider> 
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper> 
          </AuthProvider>
        </FirebaseProvider>
      </body>
    </html>
  );
}
