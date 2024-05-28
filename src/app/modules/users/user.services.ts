import config from '../../config';
import { Student } from '../student.model';
import { TStudent } from '../student/student.interface';
import { generateStudentId } from './user.utils';
import { TUser } from './user.interfaces';
import { User } from './user.model';
import { academicSemesterModel } from '../academicSemester/academicSemester,model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  //  set student role
  userData.role = 'student';

  const admissionSemester = await academicSemesterModel.findById(
    payload.admissionSemester,
  );

  if (admissionSemester) {
    // set generated id
    userData.id = await generateStudentId(admissionSemester);
  } else {
    // Handle the null case, e.g., throw an error or return a default value
    throw new Error('Admission semester not found');
  }

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const NewStudent = await Student.create(payload);
    return NewStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
