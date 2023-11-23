import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { thingsRouter } from './routes/things.router.js';

import { errorMiddleware } from './middleware/error.middleware.js';
import { factsRouter } from './routes/facts.routers.js';
import { usersRouter } from './routes/users.router.js';

export const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static('public'));

app.use('/things', thingsRouter);
app.use('/facts', factsRouter);
app.use('/users', usersRouter);

app.use(errorMiddleware);
