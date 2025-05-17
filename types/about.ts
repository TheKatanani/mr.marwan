export interface AboutSection {
  title: string;
  content: string;
}

export interface AboutFormData {
  hero: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: string;
  };
  section2: {
    title: string;
    image: string;
    description: string;
  };
  journey: AboutSection;
  whyBuild: AboutSection;
  howWeWork: AboutSection;
  messageInLife: AboutSection;
  messageInTraining: AboutSection;
}