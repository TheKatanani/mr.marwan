export default function FreeCoursesSkeleton() {
  return (
    <section className="py-20 animate-pulse bg-white">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-300 mb-8 w-1/2 rounded"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded shadow p-4">
              <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>
              <div className="h-5 bg-gray-300 w-3/4 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
