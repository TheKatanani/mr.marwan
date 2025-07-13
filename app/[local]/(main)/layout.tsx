/** @format */

import type { Metadata } from "next";
import "@/app/globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "موقع الدكتور مروان العزاوي",
  description: "موقع الدكتور مروان العزاوي الرسمي",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ local: string }>;
}>) {
  const { local } = await params;
  return (
    <LayoutWrapper>
      <main
        lang={local}
        dir={local === "ar" ? "rtl" : "ltr"}
        suppressHydrationWarning={true}
      >
        {children}
      </main>
    </LayoutWrapper>
  );
}
