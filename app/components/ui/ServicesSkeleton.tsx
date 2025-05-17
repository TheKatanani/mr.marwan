export default function ServicesSkeleton() {
  return (
    <div className="p-6 bg-white rounded-xl shadow text-gray-800 animate-pulse">
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 w-32 bg-gray-200 rounded" />
        <div className="h-10 w-40 bg-gray-300 rounded" />
      </div>

      <div className="space-y-3 min-h-screen">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
