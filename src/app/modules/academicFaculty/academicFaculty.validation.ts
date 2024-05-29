import { z } from 'zod';

const academicFacultySchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'academic Faculty must be String' }),
  }),
});
const updateAcademicFacultySchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'academic Faculty must be String' })
      .optional(),
  }),
});

export const academicFacultyValidation = {
  academicFacultySchema,
  updateAcademicFacultySchema,
};
