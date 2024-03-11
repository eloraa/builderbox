import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number.'),
});
