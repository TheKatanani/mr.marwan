'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter(); 
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signIn');  
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <p className="text-center mt-20">جاري التحقق من تسجيل الدخول...</p>;
  }

  return <>{children}</>;
}
