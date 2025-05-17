import { About } from "@/types/about2";
import { db } from "./firebase"; // Adjust path as needed
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
  description,
  aboutImage,
  mainVideo,
}: {
  title: string;
  description: string;
  aboutImage: string; // should be Cloudinary URL
  mainVideo: string;  // should be Cloudinary URL or YouTube
}) {
  const docRef = doc(db, "about", "b3S8IfsOYkhM0Tc7fCKd");
  await setDoc(docRef, {
    title,
    description,
    aboutImage,
    mainVideo,
  });
}
