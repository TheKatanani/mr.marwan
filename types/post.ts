import type { Timestamp } from 'firebase/firestore';
import { LocalizedField } from '.';
 
export type Post = {
  id: string;
  title: LocalizedField;
  content: LocalizedField;
  createdAt: Timestamp | Date;
  updatedAt?: Timestamp | Date;
};
 