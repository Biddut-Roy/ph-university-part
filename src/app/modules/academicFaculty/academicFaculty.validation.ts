import { z } from 'zod';

const academicFacultySchema = z.object({
  name: z
    .string({ invalid_type_error: 'academic Faculty must be String' })
    .optional(),
});
const updateAcademicFacultySchema = z.object({
  name: z
    .string({ invalid_type_error: 'academic Faculty must be String' })
    .optional(),
});

export const academicFacultyValidation = {
  academicFacultySchema,
  updateAcademicFacultySchema,
};
