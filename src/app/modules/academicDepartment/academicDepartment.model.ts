import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interfaces';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'academicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

export const academicDepartment = model<TAcademicDepartment>(
  'AcademicFaculty',
  academicDepartmentSchema,
);
