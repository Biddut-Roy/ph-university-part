import { z } from 'zod';
import {
  academicCodes,
  academicNames,
  months,
} from './academicSemester.constant';

const monthEnum = z.enum([...months] as [string, ...string[]]);

const createValidation = z.object({
  body: z.object({
    name: z.enum([...academicNames] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicCodes] as [string, ...string[]]),
    startMonth: monthEnum,
    endMonth: monthEnum,
  }),
});

export const academicSemesterSchemaZod = {
  createValidation,
};
