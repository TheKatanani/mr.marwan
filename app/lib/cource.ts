import { Course } from "@/types/course";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const coursesCollection = collection(db, "courses");

export const fetchCourses = async (): Promise<Course[]> => {
  const snapshot = await getDocs(coursesCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Course[];
};
// Get a single course by ID
export const fetchCourse = async (id: string): Promise<Course | null> => {
  const docRef = doc(db, "courses", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists()
    ? ({ id: docSnap.id, ...docSnap.data() } as Course)
    : null;
};
export const addCourse = async (course: Course): Promise<void> => {
  await addDoc(coursesCollection, course);
};

export const updateCourse = async (id: string, updates: Partial<Course>): Promise<void> => {
  const courseRef = doc(db, "courses", id);
  await updateDoc(courseRef, updates);
};

export const deleteCourse = async (id: string): Promise<void> => {
  const courseRef = doc(db, "courses", id);
  await deleteDoc(courseRef);
};
