import { z } from 'zod';

export const academicFacultySchema = z.object({
  name: z
    .string({ invalid_type_error: 'academic Faculty must be String' })
    .optional(),
});
