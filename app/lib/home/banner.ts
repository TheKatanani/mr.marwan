import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { HomeBannerData } from "@/types/home";

const homeBannerRef = doc(db, "homePage", "banner");

// Get banner data
export const fetchHomeBanner = async (): Promise<HomeBannerData | null> => {
  const docSnap = await getDoc(homeBannerRef);
  return docSnap.exists() ? (docSnap.data() as HomeBannerData) : null;
};

// Update banner data
export const updateHomeBanner = async (updates: Partial<HomeBannerData>) => {
  await updateDoc(homeBannerRef, updates);
};
