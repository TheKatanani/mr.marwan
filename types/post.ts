import type { Timestamp } from 'firebase/firestore';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: Timestamp | Date; // Can be Timestamp from Firestore or Date object after conversion
  updatedAt?: Timestamp | Date;
}