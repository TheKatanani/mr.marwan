import { LocalizedField } from ".";

export interface Review {
  id: string;
  qoute: string;
  rating: number;
} 
export interface ReviewDoc {
  id: string;
  qoute: LocalizedField;
  rating: number;
}