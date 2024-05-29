import express from 'express';
import validationRequest from '../../utilis/validationRequest';
import { academicFacultySchema } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controllrs';

const router = express.Router();

// check validation then  student controller working
router.post(
  '/create-faculty',
  validationRequest(academicFacultySchema),
  AcademicFacultyControllers.createAcademicFaculty,
);

export const UserRoutes = router;
