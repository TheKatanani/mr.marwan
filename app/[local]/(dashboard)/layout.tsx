/** @format */

import { Metadata } from "next";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import { FirebaseProvider } from "@/context/FirebaseProvider";
import { AuthProvider } from "@/context/AuthContext";
import "@/app/globals.css";
export const metadata: Metadata = {
  title: "لوحة التحكم",
  description: "لوحة التحكم - موقع الدكتور مروان العزاوي الرسمي",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-right custom-bg">
      <FirebaseProvider>
        <AuthProvider>
          <DashboardSidebar />
          <main className="flex-1 p-6 md:p-8 mt-16 md:mt-0 overflow-auto h-screen">
            {children}
          </main>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}
