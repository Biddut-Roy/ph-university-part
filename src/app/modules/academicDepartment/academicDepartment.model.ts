import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interfaces';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

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

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExits = await academicDepartmentModel.findOne({
    name: this.name,
  });

  if (isDepartmentExits) {
    throw new AppError(httpStatus.NOT_FOUND, ' Is department already exits');
  }

  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = await this.getQuery();
  const isDepartmentExits = await academicDepartmentModel.findOne(query);

  if (!isDepartmentExits) {
    throw new Error("This id is doesn't exits");
  }

  next();
});

export const academicDepartmentModel = model<TAcademicDepartment>(
  'AcademicFaculty',
  academicDepartmentSchema,
);
