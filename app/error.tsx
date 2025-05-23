'use client'

import { Metadata } from 'next';
import { useEffect } from 'react'
export const metadata: Metadata = {
  title: "خطأ",
  description: "خطأ - موقع الدكتور مروان العزاوي", 
};
type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('🔥 خطأ في الصفحة:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-xl">
        <h2 className="text-3xl font-bold text-red-600">حدث خطأ غير متوقع</h2>
        <p className="text-gray-600 text-lg">
          عذرًا، حدث خطأ أثناء تحميل هذه الصفحة.
        </p>
        <button
          onClick={() => reset()}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
        >
          حاول مرة أخرى
        </button>
      </div>
    </div>
  )
}
