import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { AboutFormData } from "@/types/about";

const aboutPageRef = doc(db, "aboutPage", "mainContent");

export const fetchAboutPage = async (): Promise<AboutFormData | null> => {
  const docSnap = await getDoc(aboutPageRef);
  return docSnap.exists() ? (docSnap.data() as AboutFormData) : null;
};

export const updateAboutPage = async (
  updates: Partial<AboutFormData>
): Promise<void> => {
  await updateDoc(aboutPageRef, updates);
};
