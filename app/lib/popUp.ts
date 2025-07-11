"use server";

import { BookUser } from "@/types";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
const bookUserConnection = collection(db, "bookUsers");
// Add a new book user to Firestore
export const addBookUsers = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");

  const newUser = {
    name,
    email,
    phone,
    createdAt: new Date(),
  };

  try {
    await addDoc(bookUserConnection, newUser);
    return { success: true };
  } catch (error) {
    return { errorMessage: "Ooops! There was a problem!" };
  }
};

// Fetch all book users from Firestore 
export const fetchBookUsers = async (): Promise<{ users?: BookUser[]; errorMessage?: string }> => {
  try {
    const snapshot = await getDocs(bookUserConnection);
    const users: BookUser[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        createdAt: data.createdAt?.toDate
          ? data.createdAt.toDate().toISOString()
          : (data.createdAt as string),
      };
    });
    return { users };
  } catch (error) {
    return { errorMessage: "Failed to fetch book users." };
  }
};
