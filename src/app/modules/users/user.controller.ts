/* eslint-disable no-unused-vars */
import { userServices } from './user.services';
import sendResponse from '../../utilis/sendrespons';
import httpStatus from 'http-status';
import { catchAsync } from '../../utilis/cathAsynch';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await userServices.createStudentIntoDB(password, studentData);

  // res.status(200).json({
  //   success: true,
  //   message: 'Student is created succesfully',
  //   data: result,
  // });

  //function generate response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
};
