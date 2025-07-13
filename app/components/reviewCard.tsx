/** @format */

export default function ReviewCard({
  qoute,
  rating,
}: {
  qoute: string;
  rating: number;
}) {
  return (
    <div className="relative w-full max-w-sm rounded-xl p-6 shadow-lg bg-gray-50 text-gray-800 flex flex-col justify-between text-start"> 
        <span className="text-yellow-400 text-5xl leading-none">“</span>
      <p className="text-right leading-loose  text-xl">{qoute}</p>
        <div className="flex gap-1 text-yellow-400 text-2xl">
          {"★".repeat(rating)}
        </div>
    </div>
  );
}
/*
  bg-gradient-to-br from-blue-100 via-white to-pink-100 text-gray-800 
*/
