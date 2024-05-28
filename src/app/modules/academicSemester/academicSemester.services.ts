import { TAcademicSemester } from './academic.interface';
import { academicSemesterModel } from './academicSemester,model';
import { academicSectionNameCode } from './academicSemester.constant';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSectionNameCode[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
    const result = await academicSemesterModel.create(payload);
    return result;
  }
};
export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
