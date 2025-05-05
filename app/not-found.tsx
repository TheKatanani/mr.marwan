import { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",   
};
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-xl">
        <h2 className="text-3xl font-bold text-gray-800">الصفحة غير موجودة🚫</h2>
        <p className="text-gray-600 text-lg">
          لم نتمكن من العثور على الصفحة التي طلبتها.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition-all"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  )
}
