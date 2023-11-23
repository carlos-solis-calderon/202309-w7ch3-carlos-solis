import { dbConnect } from './db.connect';
import mongoose from 'mongoose';

it('should connect to the MongoDB database successfully', () =>
  dbConnect().then((connection) => {
    expect(connection).toBeDefined();
    expect(connection).toBeInstanceOf(mongoose.Connection);
  }));
