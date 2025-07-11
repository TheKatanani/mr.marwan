import { LocalizedField } from ".";

export interface AboutSection {
  title: LocalizedField;
  content: LocalizedField;
}

export interface AboutFormData {
  hero: {
    title: LocalizedField;
    description: LocalizedField;
    ctaText: LocalizedField;
    ctaLink: string;
    image: string;
  };
  section2: {
    title: LocalizedField;
    description: LocalizedField;
    image: string;
  };
  journey: AboutSection;
  whyBuild: AboutSection;
  howWeWork: AboutSection;
  messageInLife: AboutSection;
  messageInTraining: AboutSection;
}
