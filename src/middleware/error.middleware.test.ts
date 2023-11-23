import { NextFunction } from 'express';
import { HttpError } from '../facts/types/http.error.js';
import { errorMiddleware } from './error.middleware.js';
import { Request, Response } from 'express';

describe('Given the handleError middleware', () => {
  describe('When it is instantiated', () => {
    const error = new HttpError(404, 'Not found', 'The request was not found');
    const req = {} as Request;
    const res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn().mockResolvedValue({}),
    } as unknown as Response;
    const next = jest.fn() as NextFunction;

    test('When it is instantiated with a HttpError, then it should set a status, a statusMessage, and an error object', async () => {
      await errorMiddleware(error, req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(next).not.toHaveBeenCalled();
    });
  });
});
