import { Router as createRouter } from 'express';
import { FactsController } from '../controllers/facts.controller.js';
import { FactsMongoRepo } from '../facts/facts.mongo.repo.js';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';

export const factsRouter = createRouter();

const repo = new FactsMongoRepo();
const controller = new FactsController(repo);
const interceptor = new AuthInterceptor();

factsRouter.get('/', controller.getAll.bind(controller));
factsRouter.get('/search', controller.search.bind(controller));
factsRouter.get('/:idFact', controller.getById.bind(controller));
factsRouter.post(
  '/',
  interceptor.authorization.bind(interceptor),
  controller.create.bind(controller)
);
factsRouter.patch('/:idFact', controller.update.bind(controller));
factsRouter.delete('/:idFact', controller.delete.bind(controller));
