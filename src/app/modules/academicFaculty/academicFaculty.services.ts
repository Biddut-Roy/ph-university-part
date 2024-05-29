import { TAcademicFaculty } from './academicFaculti.interfaces';
import { academicFaculty } from './academicFaculty.model';

const academicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await academicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await academicFaculty.find();
  return result;
};

const getAcademicFacultyFromDB = async (id: string) => {
  const result = await academicFaculty.findOne({ id });
  return result;
};

export const AcademicFacultyServices = {
  academicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getAcademicFacultyFromDB,
};
