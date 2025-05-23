import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const settingsRef = doc(db, 'siteSettings', 'general');

export const fetchLogoUrl = async (): Promise<string> => {
  const docSnap = await getDoc(settingsRef);
  return docSnap.exists() ? docSnap.data().logoUrl || '' : '';
};

export const updateLogoUrl = async (url: string): Promise<void> => {
  await setDoc(settingsRef, { logoUrl: url, updatedAt: new Date() }, { merge: true });
};

export const removeLogoUrl = async (): Promise<void> => {
  await setDoc(settingsRef, { logoUrl: '', updatedAt: new Date() }, { merge: true });
};
