/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/users/user.route';
import httpStatus from 'http-status';
import router from './app/route';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

// Error-handling middleware

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(globalErrorHandler);

// not route found
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    error: '',
  });
});

export default app;
