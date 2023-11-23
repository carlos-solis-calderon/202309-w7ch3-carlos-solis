import mongoose from 'mongoose';

export const dbConnect = () => {
  const cluster = '@carlixi.mk0ept7.mongodb.net';
  const user = 'process.env.USER_DB;';
  const passwd = 'process.env.PASSWD_DB';
  const uri = `mongodb+srv://${user}:${passwd}@${cluster}/?retryWrites=true&w=majority`;

  mongoose.connect(uri);
};
