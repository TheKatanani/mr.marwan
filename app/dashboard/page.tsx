import Link from "next/link";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Dashboard = async () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-xl">
          <h1 className="text-3xl font-bold text-gray-800">
            مرحبًا بك في لوحة التحكم
          </h1>
          <p className="text-gray-600 text-lg">
            يمكنك إدارة المنشورات الخاصة بك من هنا.
          </p>
          <Link
            href="/dashboard/posts"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition-all"
          >
            عرض المنشورات
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
