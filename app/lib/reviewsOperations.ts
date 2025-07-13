import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { Review, ReviewDoc } from "@/types/reviews";
import { LocalizedField } from "@/types";

const reviewsRef = collection(db, "reviews");
export const getReviews = async (
  locale: keyof LocalizedField
): Promise<Review[]> => {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  const reviews: Review[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as {
      qoute: LocalizedField;
      rating: number;
    };

    if (data.qoute[locale]) {
      reviews.push({
        id: doc.id,
        qoute: data.qoute[locale],
        rating: data.rating,
      });
    }
  });

  return reviews;
};
export const fetchAllReviews = async (): Promise<ReviewDoc[]> => {
  const snapshot = await getDocs(reviewsRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<ReviewDoc, "id">),
  }));
};

export const fetchReviewById = async (
  id: string
): Promise<ReviewDoc | null> => {
  const ref = doc(db, "reviews", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as Omit<ReviewDoc, "id">) };
};

export const createReview = async (data: Omit<ReviewDoc, "id">) => {
  await addDoc(reviewsRef, data);
};

export const updateReview = async (id: string, data: Omit<ReviewDoc, "id">) => {
  const ref = doc(db, "reviews", id);
  await updateDoc(ref, data);
};

export const deleteReview = async (id: string) => {
  await deleteDoc(doc(db, "reviews", id));
};
