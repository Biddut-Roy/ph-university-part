/* eslint-disable no-unused-vars */
import sendResponse from '../../utilis/sendrespons';
import httpStatus from 'http-status';
import { catchAsync } from '../../utilis/cathAsynch';
import { academicSemesterServices } from './academicSemester.services';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createAcademicSemister = catchAsync(async (req, res, next) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req?.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic semester is created succesfully',
    data: result,
  });
});

export const academicSemesterControllers = {
  createAcademicSemister,
};
