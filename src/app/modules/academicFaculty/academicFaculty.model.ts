import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculti.interfaces';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const academicFaculty = model<TAcademicFaculty>(
  'User',
  academicFacultySchema,
);