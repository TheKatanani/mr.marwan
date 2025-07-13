export interface LocalizedField {
  ar: string;
  en: string;
}

export interface Facilities {
  id?: string;
  title: string;
  description: string;
  image: string;
}
export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  inquiryType?: string;
  subject: string;
  message: string;
  createdAt: string;
}
export interface BookUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}
export type Language = "ar" | "en";
export type QuickAnswer = {
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
};
export type QuickAnswersData = {
  questions: QuickAnswer[];
};
export interface Facility {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
  image: string;
}
