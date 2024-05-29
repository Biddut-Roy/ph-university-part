import { RequestHandler } from 'express';
import { catchAsync } from '../../utilis/cathAsynch';
import sendResponse from '../../utilis/sendrespons';
import httpStatus from 'http-status';
import { academicDepartmentSchemaServices } from './academicDepartment.services';

const createAcademicDepartment: RequestHandler = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async (req, res, next) => {
    const result =
      await academicDepartmentSchemaServices.academicDepartmentIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic Faculty is created successfully',
      data: result,
    });
  },
);

const getAllAcademicDepartment: RequestHandler = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async (req, res, next) => {
    const result =
      await academicDepartmentSchemaServices.getAllAcademicDepartmentFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic Faculty get data successfully',
      data: result,
    });
  },
);

const getAcademicDepartment: RequestHandler = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async (req, res, next) => {
    const { DepartmentID } = req.params;

    const result =
      await academicDepartmentSchemaServices.getAcademicDepartmentFromDB(
        DepartmentID,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic find a single Faculty data',
      data: result,
    });
  },
);

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { DepartmentID } = req.params;
  const result =
    await academicDepartmentSchemaServices.updateAcademicDepartmentIntoDB(
      DepartmentID,
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
  createAcademicDepartment,
  getAllAcademicDepartment,
  getAcademicDepartment,
  updateAcademicDepartment,
};
