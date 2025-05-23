export interface Course {
  id?: string; // optional, for local use
  title: string;
  description: string;
  trainer: string;
  type: "free" | "paid";
  cost: number;
  btnText: string;
  btnLink: string;
  image: string;
}
