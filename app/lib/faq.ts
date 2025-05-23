// firebase/faqOperations.ts
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
const faqCollection = collection(db, 'faqs');

export const addFAQ = async (faq: { question: string; answer: string }) => {
  const docRef = await addDoc(faqCollection, faq);
  return docRef.id;
};

export const getFAQ = async (id: string) => {
  const docRef = doc(db, 'faqs', id); 
  const docSnap = await getDoc(docRef);  

  if (docSnap.exists()) {
    return docSnap.data();  
  } else {
    return undefined;  
  }
};
export const getFAQs= async () => {
  const snapshot = await getDocs(faqCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateFAQ = async (
  id: string,
  updatedData: { question: string; answer: string }
) => {
  const faqDoc = doc(db, 'faqs', id);
  await updateDoc(faqDoc, updatedData);
};

export const deleteFAQ = async (id: string) => {
  const faqDoc = doc(db, 'faqs', id);
  await deleteDoc(faqDoc);
};
