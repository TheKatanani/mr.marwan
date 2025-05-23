const AboutSkeleton = () => {
  return (
    <section className="py-16 min-h-screen grid place-items-center">
      <div className="animate-pulse space-y-4 max-w-4xl w-full px-4">
        <div className="h-8 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
        <div className="h-64 bg-gray-200 rounded-xl mt-6" />
      </div>
    </section>
  );
};

export default AboutSkeleton;