"use server";

import { contactFormSchema } from "./validation/contactSchema";
import { db } from "@/app/lib/firebase";
import { ContactMessage, QuickAnswer, QuickAnswersData } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { getLocale } from "next-intl/server";

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

type ActionState = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function contactFormAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData.entries());
  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    const flat = result.error.flatten();
    return {
      success: false,
      message: "يرجى تصحيح الحقول التالية:",
      fieldErrors: flat.fieldErrors as Record<string, string>,
    };
  }

  try {
    await addDoc(collection(db, "contacts"), {
      ...result.data,
      createdAt: new Date(),
    });

    return {
      success: true,
      message: "✅ تم إرسال الرسالة بنجاح",
    };
  } catch (err) {
    return {
      success: false,
      message: "حدث خطأ أثناء الإرسال",
    };
  }
}


export async function fetchContactMessages(): Promise<ContactMessage[]> {
  const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || "",
      inquiryType: data.inquiryType || "",
      subject: data.subject,
      message: data.message,
      createdAt: data.createdAt?.toDate().toISOString() || "",
    };
  });
} 

export async function getContactInfo() {
  const locale = await getLocale();
  const ref = doc(db, "contact", "contactInfo");
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error("Contact info not found");
  }

  const data = snap.data();
  return {
    phone: data.phone,
    email: data.email,
    whatsapp: data.whatsapp,
    address: data.address?.[locale] || data.address?.en || ""
  };
}


export async function fetchQuickAnswers(): Promise<{
  questions: { question: string; answer: string }[];
}> {
  const locale = await getLocale();
  const ref = doc(db, "contact", "quickAnswers");
  const snap = await getDoc(ref);

  if (!snap.exists()) throw new Error("Quick answers not found");

  const data = snap.data() as QuickAnswersData;

  return { 
    questions: data.questions.map((q: QuickAnswer) => ({
      question: q.question[locale as keyof typeof q.question] || q.question.en,
      answer: q.answer[locale as keyof typeof q.answer] || q.answer.en
    }))
  };
}