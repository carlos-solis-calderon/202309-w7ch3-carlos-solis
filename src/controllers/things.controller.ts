import { NextFunction, Request, Response } from 'express';
import { ThingsFileRepo } from '../repos/things/thing.file.repo.js';

export class ThingsController {
  repo: ThingsFileRepo;
  constructor() {
    this.repo = new ThingsFileRepo();
  }

  async getAll(_req: Request, res: Response) {
    const result = await this.repo.getAll();
    res.json(result);
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.repo.getById(req.params.idThing);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.repo.create(req.body);
      res.status(201);
      res.statusMessage = 'Created';
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response) {
    const result = await this.repo.update(req.params.id, req.body);
    res.json(result);
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.repo.delete(req.params.id);
      res.status(204);
      res.statusMessage = 'No Content';
      res.json({});
    } catch (error) {
      next(error);
    }
  }
}
