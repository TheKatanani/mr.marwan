import { doc, getDoc, updateDoc } from "firebase/firestore" 
import { WhyAcademySectionData } from "@/types/home"
import { db } from "../firebase"

const whyAcademyRef = doc(db, 'homePage', 'whyAcademy')

// Fetch WhyAcademy section
export const fetchWhyAcademy = async (): Promise<WhyAcademySectionData | null> => {
  const docSnap = await getDoc(whyAcademyRef)
  return docSnap.exists() ? (docSnap.data() as WhyAcademySectionData) : null
}

// Update WhyAcademy section
export const updateWhyAcademy = async (updates: Partial<WhyAcademySectionData>) => {
  await updateDoc(whyAcademyRef, updates)
}
