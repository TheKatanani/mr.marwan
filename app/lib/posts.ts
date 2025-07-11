import { db } from './firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import type {  Post } from '@/types/post';
import { LocalizedField } from '@/types';

// Helper function to convert Firestore Timestamp to Date
const convertTimestamp = (timestamp: Timestamp | Date | undefined): Date | undefined => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  return timestamp instanceof Date ? timestamp : undefined;
};

// Fetch all posts, ordered by creation date (newest first)
export async function getPosts(count?: number): Promise<Post[]> {
  try {
    const postsCol = collection(db, "posts");
    const q = count
      ? query(postsCol, orderBy("createdAt", "desc"), limit(count))
      : query(postsCol, orderBy("createdAt", "desc"));

    const postSnapshot = await getDocs(q);
    const postsList = postSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: convertTimestamp(doc.data().createdAt) ?? new Date(),
      updatedAt: convertTimestamp(doc.data().updatedAt),
    } as Post));
    return postsList;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
// Fetch a single post by its ID
export async function getPostById(id: string): Promise<Post | null> {
  try {
    const postRef = doc(db, "posts", id);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      const postData = postSnap.data();
      console.log('the post data in getPostById func',postData)
      return {
        id: postSnap.id,
        ...postData,
        createdAt: convertTimestamp(postData.createdAt) ?? new Date(),
        updatedAt: convertTimestamp(postData.updatedAt),
      } as Post;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
}

// Fetch a single post by its slug (ID in Firestore)
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const postRef = doc(db, "posts", slug);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      const postData = postSnap.data();
      return {
        id: postSnap.id,
        ...postData,
        createdAt: convertTimestamp(postData.createdAt) ?? new Date(),
        updatedAt: convertTimestamp(postData.updatedAt),
      } as Post;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

// Fetch all post slugs (IDs)
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const postsCol = collection(db, "posts");
    const postSnapshot = await getDocs(postsCol);
    const slugs = postSnapshot.docs.map(doc => doc.id);
    return slugs;
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return [];
  }
}

// ✅ Create a new post
export async function createPost(data: { title: LocalizedField; content: LocalizedField }) {
  try {
    const postsCol = collection(db, "posts");
    const docRef = await addDoc(postsCol, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}

// ✅ Update a post
export async function updatePost(id: string, data: Partial<Post>) {
  try {
    const postRef = doc(db, "posts", id);
    await updateDoc(postRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error("Error updating post:", error);
    return false;
  }
}

// ✅ Delete a post
export async function deletePost(id: string) {
  try {
    const postRef = doc(db, "posts", id);
    await deleteDoc(postRef);
    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    return false;
  }
}
