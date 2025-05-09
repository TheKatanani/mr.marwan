import Titile from '@/app/components/Titile';
import React from 'react';
import LogoForm from './LogoForm';

export default function Page() {
  return (
    <div className="min-h-screen text-gray-800 bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-2">Site Logo</h1>
        <p className="mb-6 text-gray-600">
          Upload your site logo here to update the branding across your entire site.
        </p>
        <LogoForm />
      </div>
    </div>
  );
}
