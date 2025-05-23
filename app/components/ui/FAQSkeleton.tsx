export default function FAQSkeleton() {
  return (
    <section className="py-20 animate-pulse bg-white">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-300 mb-8 w-1/3 rounded"></div>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
