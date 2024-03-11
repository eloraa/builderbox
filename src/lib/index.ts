'use server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { SignJWT, jwtVerify } from 'jose';
import { type NextRequest } from 'next/server';

interface UserJwtPayload {
  jti: string;
  iat: number;
}
export const getSession = async () => {
  'use server';
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const session = token ? jwt.verify(token.value, process.env.JWT_SECRET) : null;
  return session;
};

export const signOut = async () => {
  'use server';
  const cookieStore = cookies();
  cookieStore.delete('token');
};

export async function verifyAuth(req: NextRequest, token: string) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  return jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
}
