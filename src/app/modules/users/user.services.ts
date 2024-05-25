import { TUser } from './user.interfaces';
import { User } from './user.model';

const createStudentIntoDB = async (studentData: TUser) => {
  const result = await User.create(studentData);
  return result;

  // static method instance

  //   const student = new Student(studentData); // create an instances
  //   if (await student.isUserExist(studentData.id)) {
  //     throw new Error('Student already exists');
  //   }

  //   const result = await student.save(); //build in instance method
  //   return result;
};

export const userServices = {
  createStudentIntoDB,
};
