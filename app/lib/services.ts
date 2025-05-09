import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { Service } from "@/types/servece";

const servicesCollection = collection(db, "services");

// Get all services
export const getServices = async (): Promise<Service[]> => {
  const snapshot = await getDocs(servicesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Service));
};

// Get a single service by ID
export const getService = async (id: string): Promise<Service | null> => {
  const docRef = doc(db, "services", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists()
    ? ({ id: docSnap.id, ...docSnap.data() } as Service)
    : null;
};

// Add a new service
export const addService = async (data: Omit<Service, "id">): Promise<string> => {
  const docRef = await addDoc(servicesCollection, data);
  return docRef.id;
};

// Update an existing service
export const updateService = async (
  id: string,
  data: Partial<Service>
): Promise<void> => {
  const docRef = doc(db, "services", id);
  await updateDoc(docRef, data);
};

// Delete a service by ID
export const deleteService = async (id: string): Promise<void> => {
  const docRef = doc(db, "services", id);
  await deleteDoc(docRef);
};
