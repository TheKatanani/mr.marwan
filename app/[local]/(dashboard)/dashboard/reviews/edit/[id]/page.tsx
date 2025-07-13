"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchReviewById, updateReview } from "@/app/lib/reviewsOperations";
import ReviewForm from "../../ReviewForm";
import { ReviewDoc } from "@/types/reviews";

export default function EditReview() {
  const [review, setReview] = useState<Omit<ReviewDoc, "id"> | null>(null);
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchReviewById(id).then((data) => {
      if (data) setReview({ qoute: data.qoute, rating: data.rating });
    });
  }, [id]);

  const handleUpdate = async (data: Omit<ReviewDoc, "id">) => {
    await updateReview(id, data);
    router.push("/dashboard/reviews");
  };

  if (!review) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-gray-800">
      <h2 className="text-xl font-bold mb-4">Edit Review</h2>
      <ReviewForm initialData={review} onSubmit={handleUpdate} />
    </div>
  );
}
