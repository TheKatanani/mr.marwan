import { Course } from "@/types/course";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc, 
} from "firebase/firestore";
import { db } from "./firebase";

const coursesRef = collection(db, "courses");

export async function getAllCourses(): Promise<Course[]> {
  const snapshot = await getDocs(coursesRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Course),
  }));
}

export async function getCourseById(id: string): Promise<Course | null> {
  const docRef = doc(db, "courses", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...(snapshot.data() as Course) };
}

export async function addCourse(course: Course): Promise<void> {
  await addDoc(coursesRef, course);
}

export async function updateCourse(
  id: string,
  updatedData: Partial<Course>
): Promise<void> {
  await updateDoc(doc(coursesRef, id), updatedData);
}

export async function deleteCourse(id: string): Promise<void> {
  await deleteDoc(doc(coursesRef, id));
}
