const BannerSkeleton = () => {
  return (
    <section className="relative bg-gray-200 animate-pulse py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6 bg-gray-300 bg-opacity-40 p-6 rounded-lg">
        {/* image Placeholder */}
        <div className="mx-auto w-24 h-24 rounded-full bg-gray-400" />

        {/* Title Placeholder */}
        <div className="h-6 w-2/3 mx-auto bg-gray-400 rounded" />

        {/* Subtitle Placeholder */}
        <div className="h-4 w-1/2 mx-auto bg-gray-400 rounded" />

        {/* CTA Button Placeholder */}
        <div className="h-10 w-32 mx-auto bg-gray-400 rounded" />
      </div>
    </section>
  );
};

export default BannerSkeleton;
