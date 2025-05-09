'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import Menu from '@/app/icons/MenuIcon';
import X from '@/app/icons/CloseIcon';

const dashboardLinks = [
  { href: '/dashboard/about', label: 'من نحن' },
  { href: '/dashboard/services', label: 'الخدمات' },
  { href: '/dashboard/faq', label: 'الأسئلة الشائعة' },
  { href: '/dashboard/posts', label: 'المدونة' },
  { href: '/dashboard/logo', label: 'الشعار' },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between bg-white p-4 md:hidden shadow fixed top-0 w-full z-40 border-b border-gray-200">
        <h2 className="text-lg font-bold text-[#C8105D]">لوحة التحكم</h2>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`${
          menuOpen ? 'block' : 'hidden'
        } min-h-screen fixed md:static top-16 left-0 md:top-0 w-full md:w-64 bg-white border-l border-gray-200 shadow-md p-6 space-y-6 z-30 md:block h-full`}
      >
        <nav className="space-y-3">
          {dashboardLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block p-2 rounded-md hover:bg-[#C8105D] hover:text-white transition ${
                pathname === link.href ? 'bg-[#C8105D] text-white' : 'text-gray-800'
              }`}
              onClick={() => setMenuOpen(false)} // close menu on link click (mobile)
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 space-y-4">
          <Link href="/" className="block text-center btn-primary">
            العودة للموقع
          </Link>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            تسجيل الخروج
          </button>
        </div>
      </aside>
    </>
  );
}
