import { LocalizedField } from ".";

 
export type SectionItem = {
  title: LocalizedField;
  description: LocalizedField;
};

export type StructureSection = {
  title: LocalizedField;
  items: SectionItem[];
};

export type Standard = {
  id?: string;
  name: LocalizedField;
  short_description: LocalizedField;
  hero: {
    title: LocalizedField;
    description: LocalizedField;
  };
  about: {
    title: LocalizedField;
    subtitle: LocalizedField;
    description: LocalizedField;
    image: string;
  };
  structure: {
    theory: StructureSection;
    practice: StructureSection;
  };
};
