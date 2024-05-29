import { TAcademicDepartment } from './academicDepartment.interfaces';
import { academicDepartment } from './academicDepartment.model';

const academicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await academicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDB = async () => {
  const result = await academicDepartment.find();
  return result;
};

const getAcademicDepartmentFromDB = async (id: string) => {
  const result = await academicDepartment.findOne({ id });
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await academicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const academicDepartmentSchemaServices = {
  academicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
