import { z } from 'zod';

const academicDepartmentSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'academic Faculty must be String' }),
    academicFaculty: z.string({
      invalid_type_error: 'academic Department must be String',
      required_error: 'academic Department must be set',
    }),
  }),
});
const updateAcademicDepartmentSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'academic Faculty must be String' })
      .optional(),
    academicFaculty: z.string({
      invalid_type_error: 'academic Department must be String',
      required_error: 'academic Department must be set',
    }),
  }),
});

export const academicFacultyValidation = {
  academicDepartmentSchema,
  updateAcademicDepartmentSchema,
};
