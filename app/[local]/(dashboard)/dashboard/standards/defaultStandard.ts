import { LocalizedField } from "@/types";
import { Standard } from "@/types/standard";

 
export const emptyLocalized: LocalizedField = { en: "", ar: "" };

export const defaultStandard: Standard = { 
  name: emptyLocalized,
  short_description: emptyLocalized,
  hero: {
    title: emptyLocalized,
    description: emptyLocalized,
  },
  about: {
    title: emptyLocalized,
    subtitle: emptyLocalized,
    description: emptyLocalized,
    image: "",
  },
  structure: {
    theory: {
      title: emptyLocalized,
      items: [
        {
          title: emptyLocalized,
          description: emptyLocalized,
        },
      ],
    },
    practice: {
      title: emptyLocalized,
      items: [
        {
          title: emptyLocalized,
          description: emptyLocalized,
        },
      ],
    },
  },
};
