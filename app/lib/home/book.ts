import { doc, getDoc, updateDoc } from "firebase/firestore";
import type { BookSectionData } from "@/types/home";
import { db } from "../firebase";

const ebookSectionRef = doc(db, "homePage", "ebook_section");

export const fetchBookSection = async (): Promise<BookSectionData | null> => {
  const docSnap = await getDoc(ebookSectionRef);
  return docSnap.exists() ? (docSnap.data() as BookSectionData) : null;
};

export const updateBookSection = async (updates: Partial<BookSectionData>) => {
  await updateDoc(ebookSectionRef, updates);
};
