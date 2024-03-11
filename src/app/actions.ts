'use server';
import { Prisma, PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { formSchema } from './schema';
import { redirect } from 'next/navigation';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

const setCookies = (user: User) => {
  'use server';
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  const cookieStore = cookies();

  cookieStore.set('token', token, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 2 * 60 * 60,
  });
};

export const handleUser = async (values: z.infer<typeof formSchema>) => {
  'use server';
  const { email, password: formPassword } = values;

  const validatedFields = formSchema.safeParse({
    email,
    password: formPassword,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: { email },
  });

  if (existingUser) {
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }

      const passwordMatch = await bcrypt.compare(formPassword, existingUser.password);

      if (!passwordMatch) {
        return new Error('Incorrect password');
      }
      setCookies(existingUser);
    } catch (error) {
      console.error(error);
    }
    return redirect('/dashboard');
  }

  try {
    const username = await generateUniqueUsername(email);
    const password = await bcrypt.hash(formPassword, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password,
        username,
      },
    });

    setCookies(user);
    return redirect('/dashboard');
  } catch (error) {
    console.error(error);
  }
  return redirect('/dashboard');
};

async function generateUniqueUsername(email: string) {
  const randomUsername = Math.random().toString(36).substring(7);

  const existingUser = await prisma.user.findFirst({
    where: { username: randomUsername },
  });

  if (existingUser) {
    const randomUsername = Math.random().toString(36).substring(7);
    return randomUsername + '_';
  }

  return randomUsername;
}
