import { TAcademicFaculty } from './academicFaculti.interfaces';
import { academicFacultyModel } from './academicFaculty.model';

const academicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await academicFacultyModel.find();
  return result;
};

const getAcademicFacultyFromDB = async (id: string) => {
  const result = await academicFacultyModel.findOne({ id });
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await academicFacultyModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicFacultyServices = {
  academicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
