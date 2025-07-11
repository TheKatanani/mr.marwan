"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAllReviews, deleteReview } from "@/app/lib/reviewsOperations";
import { ReviewDoc } from "@/types/reviews";

export default function ReviewsDashboard() {
  const [reviews, setReviews] = useState<ReviewDoc[]>([]);

  useEffect(() => {
    fetchAllReviews().then(setReviews);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteReview(id);
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="text-gray-800 p-6">
      <h2 className="text-xl font-bold mb-4">All Reviews</h2>
      <Link href="/dashboard/reviews/new" className="btn btn-primary mb-4">
        Add New Review
      </Link>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="p-4 border rounded">
            <p><strong>Arabic:</strong> {review.qoute.ar}</p>
            <p><strong>English:</strong> {review.qoute.en}</p>
            <p><strong>Rating:</strong> {review.rating}</p>
            <div className="flex gap-2 mt-2">
              <Link href={`/dashboard/reviews/${review.id}/edit`} className="btn btn-sm">
                Edit
              </Link>
              <button onClick={() => handleDelete(review.id)} className="btn btn-sm btn-error">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
