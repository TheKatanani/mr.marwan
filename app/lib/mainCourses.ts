import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import { Course } from "@/types/course";

const coursesCol = collection(db, "main_courses");

export async function fetchCourses(): Promise<Course[]> {
  const q = query(coursesCol, orderBy("createdAt", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((d) => {
    const data = d.data() as any;
    return {
      id: d.id,
      title: data.title,
      description: data.description,
      btnText: data.btnText,
      btnLink: data.btnLink,
      image: data.image,
      type: data.type,
      cost: data.cost,  
      duration: data.duration,
    };
  });
}

export async function fetchCourse(id: string): Promise<Course | null> {
  const ref = doc(db, "main_courses", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as any) } as Course;
}

export async function addCourse(data: Omit<Course, "id">): Promise<string> {
    console.log("the course datta", data);
  const docRef = await addDoc(coursesCol, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateCourse(
  id: string,
  data: Partial<Omit<Course, "id">>
) {
  await updateDoc(doc(db, "main_courses", id), data);
}

export async function deleteCourse(id: string) {
  await deleteDoc(doc(db, "main_courses", id));
}
