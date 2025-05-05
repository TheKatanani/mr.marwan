/** @format */

export default function ReviewCard({
  qoute,
  rating,
}: {
  qoute: string;
  rating: number;
}) {
  return (
    <div className="relative w-full max-w-sm rounded-xl p-6 shadow-lg bg-gradient-to-br from-blue-100 via-white to-pink-100 text-gray-800">
      {/* Quote + Stars */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 text-yellow-400 text-lg">
          {"★".repeat(rating)}
        </div>
        <span className="text-yellow-400 text-5xl leading-none">“</span>
      </div>
      {/* Text */}
      <p className="text-right leading-loose text-base">{qoute}</p>
    </div>
  );
}
