import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academic.interface';
import {
  academicCodes,
  academicNames,
  months,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: { type: String, enum: academicNames, required: true },
  code: { type: String, enum: academicCodes, required: true },
  year: { type: String, required: true },
  startMonth: {
    type: String,
    enum: months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: months,
    required: true,
  },
});

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await academicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isExist) {
    throw new Error('user already exist');
  }
  next();
});

export const academicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
