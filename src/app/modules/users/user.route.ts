import { userControllers } from './user.controller';
import { studentSchemaZODs } from '../student/StudentZOD.Validation';
import validationRequest from '../../utilis/validationRequest';
import express from 'express';
import { USER_ROLE } from './user.constant';
import auth from '../../middleware/auth';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';

const router = express.Router();

// check validation then  student controller working
router.post(
  '/create-user',
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

export const UserRoutes = router;
