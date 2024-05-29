import express from 'express';
import validationRequest from '../../utilis/validationRequest';
import { AcademicFacultyControllers } from './academicDepartment.controllrs';
import { academicFacultyValidation } from './academicDepartment.validation';

const router = express.Router();

router.get('/get', AcademicFacultyControllers.getAllAcademicDepartment);
router.get('/:facultyID', AcademicFacultyControllers.getAcademicDepartment);

router.post(
  '/create',
  validationRequest(academicFacultyValidation.academicDepartmentSchema),
  AcademicFacultyControllers.createAcademicDepartment,
);
router.patch(
  '/:facultyId',
  validationRequest(academicFacultyValidation.updateAcademicDepartmentSchema),
  AcademicFacultyControllers.updateAcademicDepartment,
);

export const AcademicFacultyRoutes = router;
