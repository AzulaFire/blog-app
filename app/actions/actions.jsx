'use server';
import prisma from '@/app/utils/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData) {
  // Auth check
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  // validation {zod}

  const title = formData.title.toString().toUpperCase();
  const body = formData.body.toString();
  const tag = formData.tag.toString();
  const image = formData.image.toString();
  const credit = formData.credit.toString();

  // Update the database

  await prisma.post.create({
    data: {
      title,
      body,
      tag,
      image,
      credit,
    },
  });

  // revalidate
  revalidatePath('/posts');
}

export async function deletePost(id) {
  // Auth check
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  await prisma.post.delete({
    where: {
      id: id,
    },
  });

  revalidatePath('/create-post');
}

export async function editPost(id) {
  // Auth check
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      title,
      body,
      tag,
      image,
      credit,
    },
  });
}
