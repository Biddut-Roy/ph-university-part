import { Request, Response } from 'express';
import { userServices } from './user.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userControllers = {
  createStudent,
};
