import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
export const dbConnect = () => {
  const user = process.env.USER_DB;
  const passwd = process.env.PASSWD_DB;
  const uri = `mongodb+srv://${user}:${passwd}@cluster0.cm9yx23.mongodb.net/IsdiCoders?retryWrites=true&w=majority`;
  return mongoose.connect(uri);
};
