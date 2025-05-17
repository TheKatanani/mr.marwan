import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from './firebase'; // adjust path if needed

const partnersCollection = collection(db, 'partners');

// Type definition
export interface Partner {
  logo: string;
  link?: string;
}

// Add new partner
export const addPartner = async (partner: Partner) => {
  const docRef = await addDoc(partnersCollection, partner);
  return docRef.id;
};

// Get a single partner by ID
export const getPartner = async (id: string) => {
  const docRef = doc(db, 'partners', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Partner & { id: string };
  } else {
    return undefined;
  }
};

// Get all partners
export const getPartners = async (): Promise<(Partner & { id: string })[]> => {
  const snapshot = await getDocs(partnersCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as (Partner & { id: string })[];
};

// Update a partner by ID
export const updatePartner = async (
  id: string,
  updatedData: Partial<Partner>
) => {
  const partnerDoc = doc(db, 'partners', id);
  await updateDoc(partnerDoc, updatedData);
};

// Delete a partner by ID
export const deletePartner = async (id: string) => {
  const partnerDoc = doc(db, 'partners', id);
  await deleteDoc(partnerDoc);
};
