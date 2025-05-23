export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-700">
      <div className="text-center space-y-4">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
        <p className="text-lg font-medium">جاري التحميل...</p>
      </div>
    </div>
  );
}
