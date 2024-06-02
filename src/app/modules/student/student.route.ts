import express from 'express';
import { StudentControllers } from './student.controller';
import validationRequest from '../../utilis/validationRequest';
import { studentSchemaZODs } from './StudentZOD.Validation';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

router.patch(
  '/:studentId',
  validationRequest(studentSchemaZODs.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
