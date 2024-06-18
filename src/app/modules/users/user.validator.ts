import { z } from 'zod';
import { UserStatus } from './user.constant';

export const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: "isNaN must be 'not a number'" })
    .max(20, { message: 'password can not be more then 20' })
    .optional(),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});

export const UserValidation = {
  userValidationSchema,
  changeStatusValidationSchema,
};
