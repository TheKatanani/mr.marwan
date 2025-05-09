/** @format */

"use client";

import ReviewCard from "./reviewCard";
// import Image from "next/image";
import Titile from "./Titile";
export default function ClientReviews({
  reviews,
}: {
  reviews: { qoute: string; rating: number }[];
}) {
  return (
    <section
      className="py-20 min-h-screen grid place-content-center bg-gradient-to-br from-pink-50 via-white to-cyan-50"
      dir="rtl"
    >
      <div className="container m-auto px-4 ">
        <Titile className="mb-12 pb-10 m-auto w-fit">
          ماذا يقول زبائننا عنا
        </Titile>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <ReviewCard qoute={review.qoute} rating={review.rating} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
