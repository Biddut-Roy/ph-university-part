import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemester } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/student',
    route: StudentRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemester,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
