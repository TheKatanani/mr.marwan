import { LocalizedField } from ".";

export type CourseFeatures = {
  duration: FeatureItem;
  investment: FeatureItem;
  level: FeatureItem;
  trainingMode: FeatureItem;
  certification: FeatureItem;
};
type FeatureItem = {
  icon: string;
  title: LocalizedField;
  description: LocalizedField;
};
export type CourseFAQ = {
  question: LocalizedField;
  answer: LocalizedField;
};

export type CourseCardInfo = {
  image: string;
  title: LocalizedField;
  short_description: LocalizedField;
  duration: LocalizedField;
};

export type CourseHero = {
  image: string;
  title: LocalizedField;
  description: LocalizedField;
};

export type CourseDescription = {
  title: LocalizedField;
  description: LocalizedField;
  pdf_url: string;
};

export type CourseVideoSection = {
  video_url: string;
  content_list: LocalizedField[]; // List of items like lesson titles
};

export type LearnType = {
  title: LocalizedField;
  description: LocalizedField;
};

export type TargetUsersType = {
  title: LocalizedField;
  description: LocalizedField;
};

export interface Course {
  id?: string; 
  standardId: string; 
  isMain: boolean;

  card: CourseCardInfo;
  hero: CourseHero;
  features: CourseFeatures;
  course_description: CourseDescription;
  video_section: CourseVideoSection;

  what_you_will_learn: LearnType[];
  goals: LocalizedField[];
  target_users: TargetUsersType[];
  faqs: CourseFAQ[];
}
