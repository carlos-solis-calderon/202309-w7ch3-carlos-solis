import { AuthInterceptor } from './auth.interceptor.js';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../facts/types/http.error.js';
it('should call next() without errors when a valid token is provided', () => {
  const authInterceptor = new AuthInterceptor();
  const req = {
    get: jest.fn().mockReturnValue('Bearer validToken'),
    body: {},
  };
  const res = {};
  const next = jest.fn();

  authInterceptor.authorization(
    req as unknown as Request,
    res as Response,
    next as NextFunction
  );

  expect(next).toHaveBeenCalled();
  expect(next).not.toHaveBeenCalledWith(expect.any(HttpError));
});
