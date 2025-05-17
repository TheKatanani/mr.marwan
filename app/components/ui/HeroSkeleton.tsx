export default function HeroSkeleton() {
  return (
    <section className="py-20 animate-pulse bg-black text-white text-right">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl ml-auto">
          <div className="h-10 bg-gray-700 mb-4 w-3/4 rounded"></div>
          <div className="h-5 bg-gray-700 mb-3 w-full rounded"></div>
          <div className="h-5 bg-gray-700 mb-6 w-2/3 rounded"></div>
          <div className="h-10 w-32 bg-blue-700 rounded"></div>
        </div>
      </div>
    </section>
  );
}
