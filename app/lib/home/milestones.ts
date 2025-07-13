import { MilestonesData } from "@/types/milestones";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { tr } from "zod/v4/locales";

const docRef = doc(db, "homePage", "milestones");

export async function getMilestonesData(): Promise<MilestonesData> {
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.warn("No milestones document found.");
    // Optional: return fallback initial structure
    return {
      title: { en: "", ar: "" },
      subtitle: { en: "", ar: "" },
      milestones: [
        {
          date: new Date().toISOString(),
          label: { en: "", ar: "" },
          countdown: true,
        },
      ],
      backgroundImage: "",
    };
  }

  const data = docSnap.data();
  return data as MilestonesData;
}

export async function updateMilestonesData(data: MilestonesData) {
  await setDoc(docRef, data);
}
