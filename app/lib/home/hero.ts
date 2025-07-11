import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { HeroSectionData } from "@/types/home";
import { Language } from "@/types";
// Reference to the hero section document in Firestore
const heroSectionRef = doc(db, "homePage", "heroSection");

// Fetch the Hero section content
export const fetchHeroSection = async (
  lang: Language
): Promise<HeroSectionData | null> => {
  const docSnap = await getDoc(heroSectionRef);
  if (!docSnap.exists()) return null;

  const data = docSnap.data();
  return data[lang] as HeroSectionData;
};

// Update the Hero section content
export const updateHeroSection = async (
  lang: Language,
  updates: Partial<HeroSectionData>
) => {
  await updateDoc(heroSectionRef, {
    [lang]: updates,
  });
};
