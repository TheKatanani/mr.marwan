import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { AboutFormData } from "@/types/about"

const aboutPageRef = doc(db, 'aboutPage', 'mainContent')

// Get the About page content
export const fetchAboutPage = async (): Promise<AboutFormData | null> => {
  const docSnap = await getDoc(aboutPageRef)
  return docSnap.exists() ? (docSnap.data() as AboutFormData) : null
}

// Update the About page content
export const updateAboutPage = async (updates: Partial<AboutFormData>) => {
  await updateDoc(aboutPageRef, updates)
}