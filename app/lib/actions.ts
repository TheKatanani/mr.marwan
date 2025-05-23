'use server';

import { deletePost } from './posts';
import { revalidatePath } from 'next/cache'; // Optional: for cache invalidation

export async function deletePostAction(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;

  await deletePost(id);
  revalidatePath('/dashboard/posts'); // Optional: if using ISR or cache
}
