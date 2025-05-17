import { doc, getDoc, updateDoc } from "firebase/firestore";    
import { db } from "./firebase";
import { Footer } from "@/types/footer";
// Reference to the hero section document in Firestore
const FooterRef = doc(db, 'Footer', 'main');

// Fetch the Hero section content
export const fetchFooter = async (): Promise<Footer | null> => {
  const docSnap = await getDoc(FooterRef);
  return docSnap.exists() ? (docSnap.data() as Footer) : null;
};

// Update the Hero section content
export const updateFooter = async (updates: Partial<Footer>) => {
  await updateDoc(FooterRef, updates);
};
