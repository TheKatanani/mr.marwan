import { LocalizedField } from ".";

export type About = {
  title: LocalizedField;
  subTitle?: LocalizedField;
  description: LocalizedField; 
  aboutImage: string; 
}; 