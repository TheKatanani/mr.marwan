"use client";
import ReviewForm from "../ReviewForm";
import { createReview } from "@/app/lib/reviewsOperations";
import { ReviewDoc } from "@/types/reviews";
import { useRouter } from "next/navigation";

export default function CreateReview() {
  const router = useRouter();

  const handleCreate = async (data: Omit<ReviewDoc, "id">) => {
    await createReview(data);
    router.push("/dashboard/reviews");
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-gray-800">
      <h2 className="text-xl font-bold mb-4">Add New Review</h2>
      <ReviewForm onSubmit={handleCreate} />
    </div>
  );
}
