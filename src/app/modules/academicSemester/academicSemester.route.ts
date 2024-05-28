import express from 'express';
import { academicSemesterControllers } from './AcademicSemester.controller';
import { academicSemesterSchemaZod } from './academicSemester.validatiomZOD';
import validationRequest from '../../utilis/validationRequest';

const router = express.Router();

router.post(
  'create-academic-semester',
  validationRequest(academicSemesterSchemaZod.createValidation),
  academicSemesterControllers.createAcademicSemester,
);

router.get(
  '/:semesterId',
  academicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validationRequest(academicSemesterSchemaZod.updateAcademic),
  academicSemesterControllers.updateAcademicSemester,
);

router.get('/', academicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemester = router;
