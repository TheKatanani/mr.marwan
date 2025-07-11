import { db } from "./firebase"; // adjust path as needed
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { Standard } from "@/types/standard";

const standardsCollection = collection(db, "standards");

export async function getStandards(): Promise<Standard[]> {
  const snapshot = await getDocs(standardsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Standard));
}

export async function getStandardById(id: string): Promise<Standard | null> {
  const docRef = doc(standardsCollection, id); 
  const snapshot = await getDoc(docRef); 
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as Standard;
}

export async function addStandard(data: Omit<Standard, "id">) {
  const newDoc = doc(standardsCollection);
  await setDoc(newDoc, data);
}

export async function updateStandard(id: string, data: Omit<Standard, "id">) {
  const docRef = doc(standardsCollection, id);
  await updateDoc(docRef, data);
}

export async function deleteStandard(id: string) {
  const docRef = doc(standardsCollection, id);
  await deleteDoc(docRef);
}
