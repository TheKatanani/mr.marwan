import type{ About } from "@/types/aboutHome";
import { db } from "../firebase"; // Adjust path as needed
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function getAboutData(): Promise<About> {
  const docRef = doc(db, "about", "b3S8IfsOYkhM0Tc7fCKd");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as About;
  } else {
    throw new Error("No about data found");
  }
}

export async function updateAboutData({
  title,
  subTitle= { en: "", ar: "" },
  description,
  aboutImage,
}: About) {
  const docRef = doc(db, "about", "b3S8IfsOYkhM0Tc7fCKd");
  await setDoc(docRef, {
    title,
    subTitle,
    description,
    aboutImage,
  });
}
