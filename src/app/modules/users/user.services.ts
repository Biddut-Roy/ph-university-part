import config from '../../config';
import { TStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  //  set student role
  userData.role = 'student';
  userData.id = '20246800001';

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
  }
};

export const userServices = {
  createStudentIntoDB,
};
