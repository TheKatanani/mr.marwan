import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "موقع الدكتور مروان العزاوي",
  description: "موقع الدكتور مروان العزاوي الرسمي",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`antialiased`}
        style={{ background: "white" }}
        suppressHydrationWarning={true}
      >
        {" "}
        {children}
      </body>
    </html>
  );
}
