'use client';

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../lib/firebase';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('تم تسجيل الدخول بنجاح!');
    } catch (err: any) {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
    }
    // Redirect to the dashboard
    router.push('/dashboard');
  };

  return (
    <div dir="rtl" className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white text-gray-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تسجيل الدخول</h2>
        {error && <p className="text-sm text-red-600 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-700">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="أدخل كلمة المرور"
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
