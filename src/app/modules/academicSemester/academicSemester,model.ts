import { Schema, model } from 'mongoose';
import { TAcademicSemester, TMonths } from './academic.interface';

const months: TMonths[] = [
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

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: { type: String, enum: ['Autumn', 'Summer', 'Fall'], required: true },
  code: { type: String, enum: ['01', '02', '03'], required: true },
  year: { type: Date, required: true },
  startMonth: {
    type: String,
    enum: [
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
    ],
    required: true,
  },
  endMonth: {
    type: String,
    enum: [
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
    ],
    required: true,
  },
});

export const academicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
