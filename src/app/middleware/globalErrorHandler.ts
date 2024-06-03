/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interfaces/error';
import config from '../config';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  let errorSources: TErrorSources = [
    {
      path: '',
      message: '',
    },
  ];

  const handelZodError = (err: ZodError) => {
    const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });

    const statusCode = 400;

    return {
      statusCode,
      message: ' validation error',
      errorSources,
    };
  };

  if (err instanceof ZodError) {
    const simpleFieldError = handelZodError(err);
    statusCode = simpleFieldError?.statusCode;
    message = simpleFieldError?.message;
    errorSources = simpleFieldError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_DEV === 'Development' ? err.stack : null,
  });
};

export default globalErrorHandler;
