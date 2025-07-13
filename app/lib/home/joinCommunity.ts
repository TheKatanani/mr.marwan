import { db } from "../firebase"; // adjust to your path
import { doc, getDoc, setDoc } from "firebase/firestore";
import { JoinCommunityData } from "@/types/joinCommunity";

const docRef = doc(db, "home", "joinCommunity");

export async function getJoinCommunityData(): Promise<JoinCommunityData> {
  const snap = await getDoc(docRef);
  return snap.exists() ? (snap.data() as JoinCommunityData) : {
    video_section: { 
      title: { en: "", ar: "" },
      subtitle: { en: "", ar: "" },
      stats: [],
    },
  };
}

export async function updateJoinCommunityData(data: JoinCommunityData) {
  return await setDoc(docRef, data);
}
