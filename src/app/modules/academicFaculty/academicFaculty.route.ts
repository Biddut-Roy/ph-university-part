import express from 'express';
import validationRequest from '../../utilis/validationRequest';
import { AcademicFacultyControllers } from './academicFaculty.controllrs';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.get('/get', AcademicFacultyControllers.getAllAcademicFaculty);
router.get('/:facultyID', AcademicFacultyControllers.getAcademicFaculty);

router.post(
  '/create',
  validationRequest(academicFacultyValidation.academicFacultySchema),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.patch(
  '/:facultyId',
  validationRequest(academicFacultyValidation.updateAcademicFacultySchema),
  AcademicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
