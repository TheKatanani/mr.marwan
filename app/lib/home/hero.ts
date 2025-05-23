import { doc, getDoc, updateDoc } from "firebase/firestore";  
import { db } from "../firebase";  
import { HeroSectionData } from "@/types/home";
// Reference to the hero section document in Firestore
const heroSectionRef = doc(db, 'homePage', 'heroSection');

// Fetch the Hero section content
export const fetchHeroSection = async (): Promise<HeroSectionData | null> => {
  const docSnap = await getDoc(heroSectionRef);
  return docSnap.exists() ? (docSnap.data() as HeroSectionData) : null;
};

// Update the Hero section content
export const updateHeroSection = async (updates: Partial<HeroSectionData>) => {
  await updateDoc(heroSectionRef, updates);
};
