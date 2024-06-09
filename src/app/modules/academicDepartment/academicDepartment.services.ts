import { TAcademicDepartment } from './academicDepartment.interfaces';
import { academicDepartmentModel } from './academicDepartment.model';

const academicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  //same work pre middleware model
  const isDepartmentExits = await academicDepartmentModel.findOne({
    name: payload.name,
  });

  if (isDepartmentExits) {
    throw new Error(' Is department already exits');
  }
  const result = await academicDepartmentModel.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDB = async () => {
  const result = await academicDepartmentModel
    .find()
    .populate('academicFaculty');
  return result;
};

const getAcademicDepartmentFromDB = async (id: string) => {
  const result = await academicDepartmentModel
    .findOne({ id })
    .populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await academicDepartmentModel.findOneAndUpdate(
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
