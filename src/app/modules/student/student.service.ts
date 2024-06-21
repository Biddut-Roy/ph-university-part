import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { Student } from '../student.model';
import { TStudent } from './student.interface';
import { User } from '../users/user.model';
import mongoose from 'mongoose';
import QueryBuilder from '../../buider/QueryBuilder';
import { studentSearchableField } from './student.constant';

const createStudentIntoDB = async (student: TStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query }; // copying req.query object so that we can mutate the copy object
  // let searchTerm = ''; // SET DEFAULT VALUE
  // // IF searchTerm  IS GIVEN SET IT
  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string;
  // }
  // // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH  :
  // // { email: { $regex : query.searchTerm , $options: i}}
  // // { presentAddress: { $regex : query.searchTerm , $options: i}}
  // // { 'name.firstName': { $regex : query.searchTerm , $options: i}}
  // // WE ARE DYNAMICALLY DOING IT USING LOOP
  // const studentSearchableField = ['email', 'name.firstName', 'presentAddress'];
  // const searchQuery = Student.find({
  //   $or: studentSearchableField.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // });
  // // FILTERING fUNCTIONALITY:
  // const excludeFields = ['searchTerm', 'sort', 'limit', 'skip', 'fields'];
  // excludeFields.forEach((el) => delete queryObj[el]); // DELETING THE FIELDS SO THAT IT CAN'T MATCH OR FILTER EXACTLY
  // const filterQuery = await searchQuery
  //   .find(queryObj)
  //   .populate('admissionSemester')
  //   .populate({
  //     path: 'academicDepartment',
  //     populate: {
  //       path: 'academicFaculty',
  //     },
  //   });
  // let sort = '-createdAt';
  // if (query.sort) {
  //   sort = query.sort as string;
  // }
  // const sortQuery = filterQuery.sort(sort);
  // let page = 1; // SET DEFAULT VALUE FOR PAGE
  // let limit = 1; // SET DEFAULT VALUE FOR LIMIT
  // let skip = 0; // SET DEFAULT VALUE FOR SKIP
  // if (query.limit) {
  //   limit = Number(query.limit);
  // }
  // if (query.page) {
  //   page = Number(query.page);
  //   skip = (page - 1) * limit;
  // }
  // const paginateQuery = sortQuery.skip(skip);
  // const limitQuery = paginateQuery.limit(limit);
  // let fields = '-__v'; // SET DEFAULT VALUE
  // if (query.fields) {
  //   fields = (query.fields as string).split(',').join(' ');
  // }
  // const fieldQuery = await limitQuery.select(fields);
  // return fieldQuery;

  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(studentSearchableField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await studentQuery.countTotal();
  const result = await studentQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await Student.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }

    const deletedUser = await User.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to update student');
  }
};

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  /*
    guardain: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Mezba'
    name.lastName = 'Abedin'
  */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(modifiedUpdatedData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentIntoDB,
};
