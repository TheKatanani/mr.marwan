import {
  collection, addDoc, getDocs, updateDoc, deleteDoc, doc, getDoc
} from "firebase/firestore";
import { db } from "./firebase";
import { FAQType } from "@/types/FAQ";

const faqCollection = collection(db, "faqs");

export const addFAQ = async (faq: FAQType) => {
  const docRef = await addDoc(faqCollection, faq);
  return docRef.id;
};

export const getFAQ = async (id: string): Promise<FAQType | undefined> => {
  const docRef = doc(db, "faqs", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return undefined;
  return { id: docSnap.id, ...(docSnap.data() as FAQType) };
};

export const getFAQs = async (): Promise<FAQType[]> => {
  const snapshot = await getDocs(faqCollection);
  return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as FAQType) }));
};

export const updateFAQ = async (id: string, updates: FAQType) => {
  const faqDoc = doc(db, "faqs", id);
  await updateDoc(faqDoc, {
    question: updates.question,
    answer: updates.answer,
  });
};

export const deleteFAQ = async (id: string) => {
  const faqDoc = doc(db, "faqs", id);
  await deleteDoc(faqDoc);
};
