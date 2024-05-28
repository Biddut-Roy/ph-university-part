/* eslint-disable no-unused-vars */
import sendResponse from '../../utilis/sendrespons';
import httpStatus from 'http-status';
import { catchAsync } from '../../utilis/cathAsynch';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createAcademicSemister = catchAsync(async (req, res, next) => {
  //   const { password, student: studentData } = req.body;
  //   const result = await createacademicSemiste.createStudentIntoDB(password, studentData);
  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'Student is created succesfully',
  //     data: result,
  //   });
});

export const academicSemesterControllers = {
  createAcademicSemister,
};
