import { Router as createRouter } from 'express';
import { UsersController } from '../src/controllers/users.controller.js';
import createDebug from 'debug';
import { UsersMongoRepo } from '../src/repos/users/users.mongo.repo.js';

const debug = createDebug('W7E:users:router');

export const usersRouter = createRouter();
debug('Starting');

const repo = new UsersMongoRepo();
const controller = new UsersController(repo);

usersRouter.get('/', controller.getAll.bind(controller));
usersRouter.post('/register', controller.create.bind(controller));
usersRouter.post('/login', controller.login.bind(controller));
