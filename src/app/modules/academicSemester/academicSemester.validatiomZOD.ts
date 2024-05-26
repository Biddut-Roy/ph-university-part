import { z } from 'zod';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthEnum = z.enum(months);

export const academicSemesterSchemaZod = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    year: z.string().min(1, { message: 'Year is required' }),
    code: z.boolean(),
    startMonth: monthEnum,
    endMonth: monthEnum,
  }),
});
