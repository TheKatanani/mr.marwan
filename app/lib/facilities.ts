import {
  collection, getDocs, doc, getDoc,
  addDoc, updateDoc, deleteDoc, serverTimestamp
} from "firebase/firestore";
import { db } from "./firebase";
import { Facility } from "@/types";

const col = collection(db, "facilities");

export async function fetchFacilities(): Promise<Facility[]> {
  const snap = await getDocs(col);
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) }));
}

export async function fetchFacility(id: string): Promise<Facility | null> {
  const ref = doc(db, "facilities", id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...(snap.data() as any) } : null;
}

export async function addFacility(data: Omit<Facility, "id">) {
  const ref = await addDoc(col, { ...data, createdAt: serverTimestamp() });
  return ref.id;
}

export async function updateFacility(id: string, data: Partial<Omit<Facility, "id">>) {
  await updateDoc(doc(db, "facilities", id), data);
}

export async function deleteFacility(id: string) {
  await deleteDoc(doc(db, "facilities", id));
}
