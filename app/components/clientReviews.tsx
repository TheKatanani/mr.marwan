/** @format */

"use client";

import ReviewCard from "./reviewCard";
// import Image from "next/image";
import Title from "./Title";
const reviews = [
  { 
    qoute:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
    rating: 5, 
  },
  { 
    qoute:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
    rating: 5, 
  },
  { 
    qoute:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
    rating: 5, 
  },
];

export default function ClientReviews() {
  return (
    <section
      className="py-20 min-h-screen grid place-content-center bg-gradient-to-br from-pink-50 via-white to-cyan-50"
      dir="rtl"
    >
      <div className="container m-auto px-4 ">
        <Title className="mb-12 pb-10 m-auto w-fit">ماذا يقول زبائننا عنا</Title>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <ReviewCard qoute={review.qoute} rating={review.rating} key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
}
