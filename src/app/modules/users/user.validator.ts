import { z } from 'zod';

export const userSchema = z.object({
  password: z
    .string({ invalid_type_error: "isNaN must be 'not a number'" })
    .max(20, { message: 'password can not be more then 20' })
    .optional(),
});
