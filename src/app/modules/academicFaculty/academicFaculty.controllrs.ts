import { RequestHandler } from 'express';
import { AcademicFacultyServices } from './academicFaculty.services';
import sendResponse from '../../utilis/sendrespons';
import httpStatus from 'http-status';
import { catchAsync } from '../../utilis/cathAsynch';

const createAcademicFaculty: RequestHandler = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async (req, res, next) => {
    const { student: studentData } = req.body;
    const result =
      await AcademicFacultyServices.academicFacultyIntoDB(studentData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic Faculty is created successfully',
      data: result,
    });
  },
);

const getAllAcademicFaculty: RequestHandler = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async (req, res, next) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic Faculty get data successfully',
      data: result,
    });
  },
);

const getAcademicFaculty: RequestHandler = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async (req, res, next) => {
    const { facultyID } = req.params;

    const result =
      await AcademicFacultyServices.getAcademicFacultyFromDB(facultyID);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic find a single Faculty data',
      data: result,
    });
  },
);

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is updated succesfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getAcademicFaculty,
  updateAcademicFaculty,
};
