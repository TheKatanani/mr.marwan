/** @format */

import type { Metadata } from "next";
import "../globals.css";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata: Metadata = {
  title: "موقع الدكتور مروان العزاوي",
  description: "موقع الدكتور مروان العزاوي الرسمي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
