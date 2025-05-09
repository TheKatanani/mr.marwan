import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'; 
import { db } from './firebase';

// Get current links
export async function getSocialLinks() {
  const docRef = doc(db, 'socialMedia', 'links');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

// Update links
export async function updateSocialLinks(data : any) {
  await setDoc(doc(db, 'socialMedia', 'links'), {
    ...data,
    lastUpdated: serverTimestamp()
  });
}