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

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExits = await academicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExits) {
    throw new Error(' Is department already exits');
  }

  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = await this.getQuery();
  const isDepartmentExits = await academicDepartment.findOne(query);

  if (!isDepartmentExits) {
    throw new Error("This id is doesn't exits");
  }

  next();
});

export const academicDepartment = model<TAcademicDepartment>(
  'AcademicFaculty',
  academicDepartmentSchema,
);
