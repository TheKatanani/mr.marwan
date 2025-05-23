import { db } from "@/app/lib/firebase"; // ensure this path is correct
import { doc, getDoc, setDoc } from "firebase/firestore";
import { SocialLinks } from "@/types/SocialLinks";

// Utility to fetch current links safely
export async function getSocialLinks(): Promise<Partial<SocialLinks>> {
  const docRef = doc(db, "socialMedia", "links");
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    return snapshot.data() as Partial<SocialLinks>;
  } else {
    return {}; // If no document exists yet
  }
}

export async function updateSocialLinks(
  data: Partial<SocialLinks>
): Promise<void> {
  try {
    console.log("Updating links with data:", data);

    const currentLinks = await getSocialLinks(); // make sure this returns an object, not undefined/null
    if (!currentLinks) {
      throw new Error("No current links found, initializing with empty object.");
    }
    await setDoc(
      doc(db, "socialMedia", "links"),
      {
        ...currentLinks,
        ...data,
      },
      { merge: true } // This is what prevents overwriting the full document
    );

    console.log("Social links updated");
  } catch (error) {
    console.error("Error updating social links:", error);
    throw new Error("Failed to update social media links");
  }
}
