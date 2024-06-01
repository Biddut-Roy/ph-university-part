import express from 'express';
import validationRequest from '../../utilis/validationRequest';
import { academicFacultyValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controllrs';

const router = express.Router();

router.get('/get', AcademicDepartmentControllers.getAllAcademicDepartment);
router.get(
  '/:DepartmentID',
  AcademicDepartmentControllers.getAcademicDepartment,
);

router.post(
  '/create',
  validationRequest(academicFacultyValidation.academicDepartmentSchema),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.patch(
  '/:DepartmentID',
  validationRequest(academicFacultyValidation.updateAcademicDepartmentSchema),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
