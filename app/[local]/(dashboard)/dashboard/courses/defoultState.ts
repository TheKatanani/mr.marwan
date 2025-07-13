import { Course, CourseFeatures } from "@/types/course";
const emptyLocalized = { en: "", ar: "" };
export const defaultCourseFeatures: CourseFeatures = {
  duration: {
    icon: "",
    title: { en: "", ar: "" },
    description: { en: "", ar: "" },
  },
  investment: {
    icon: "",
    title: { en: "", ar: "" },
    description: { en: "", ar: "" },
  },
  level: {
    icon: "",
    title: { en: "", ar: "" },
    description: { en: "", ar: "" },
  },
  trainingMode: {
    icon: "",
    title: { en: "", ar: "" },
    description: { en: "", ar: "" },
  },
  certification: {
    icon: "",
    title: { en: "", ar: "" },
    description: { en: "", ar: "" },
  },
};

export const defaultCourse: Course = { 
  standardId: "", 
  isMain: false,
  card: {
    image: "",
    title: emptyLocalized,
    short_description: emptyLocalized,
    duration: emptyLocalized,
  },
  hero: {
    image: "",
    title: emptyLocalized,
    description: emptyLocalized,
  },
  features: defaultCourseFeatures,
  course_description: {
    title: emptyLocalized,
    description: emptyLocalized,
    pdf_url: "",
  },
  video_section: {
    video_url: "",
    content_list: [],
  },
  what_you_will_learn: [],
  goals: [],
  target_users: [],
  faqs: [],
};
 

