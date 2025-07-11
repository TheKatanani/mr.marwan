import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { QuickAnswer } from "@/types";

const docRef = doc(db, "contact", "quickAnswers");

export async function getQuickAnswers(): Promise<QuickAnswer[]> {
  const snap = await getDoc(docRef);
  if (!snap.exists()) return [];

  const data = snap.data();
  return data.questions || [];
}

export async function updateQuickAnswers(questions: QuickAnswer[]) {
  console.log("Updating quick answers:", questions);
  await updateDoc(docRef, { questions });
}
