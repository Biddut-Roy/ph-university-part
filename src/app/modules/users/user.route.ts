import { userControllers } from './user.controller';
import { studentSchemaZODs } from '../student/StudentZOD.Validation';
import validationRequest from '../../utilis/validationRequest';
import express from 'express';

const router = express.Router();

router.post(
  '/create-user',
  validationRequest(studentSchemaZODs.createStudentSchemaZOD),
  userControllers.createStudent,
);

export const UserRoutes = router;
