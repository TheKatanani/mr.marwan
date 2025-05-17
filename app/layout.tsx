import type { Metadata } from "next";
import "./globals.css";  

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
    <html lang="ar">
      <body
        className={`antialiased`}
        style={{ background: "white" }}
        dir="rtl"
        suppressHydrationWarning={true}
      > {children} 
      </body>
    </html>
  );
}
