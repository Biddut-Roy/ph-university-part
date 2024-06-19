import { userControllers } from './user.controller';
import { studentSchemaZODs } from '../student/StudentZOD.Validation';
import validationRequest from '../../utilis/validationRequest';
import express, { NextFunction, Request, Response } from 'express';
import { USER_ROLE } from './user.constant';
import auth from '../../middleware/auth';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { UserValidation } from './user.validator';
import { upload } from '../../utilis/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/create-student',
  // auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validationRequest(studentSchemaZODs.createStudentSchemaZOD),
  userControllers.createStudent,
);

router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  validationRequest(createFacultyValidationSchema),
  userControllers.createFaculty,
);

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  validationRequest(createAdminValidationSchema),
  userControllers.createAdmin,
);

router.post(
  '/change-status/:id',
  auth('admin'),
  validationRequest(UserValidation.changeStatusValidationSchema),
  userControllers.changeStatus,
);

router.get('/me', auth('student', 'faculty', 'admin'), userControllers.getMe);

export const UserRoutes = router;
