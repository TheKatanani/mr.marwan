export default function MarketingEbookSkeleton() {
  return (
    <section className="py-20 animate-pulse bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="h-8 bg-gray-300 mb-4 w-2/3 rounded"></div>
          <div className="h-4 bg-gray-300 mb-2 w-full rounded"></div>
          <div className="h-4 bg-gray-300 mb-4 w-4/5 rounded"></div>
          <div className="h-10 w-32 bg-blue-300 rounded"></div>
        </div>
        <div className="w-full h-64 bg-gray-300 rounded"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 border rounded">
            <div className="h-8 w-8 bg-gray-300 rounded-full mb-3"></div>
            <div className="h-5 bg-gray-300 mb-2 w-3/4 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
