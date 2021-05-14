import express from 'express';
import mongoose from 'mongoose';
import { serverPort } from './src/config/config';
import dotenv from 'dotenv';
import { rootPath } from './src/config/consts';
import playerRoutes from './src/routes/PlayerRoutes';
import locationRoutes from './src/routes/LocationRoutes';

const app = express();
app.use(express.json());
dotenv.config();

if (!process.env.MONGO_URI) {
  console.error('Cannot read Mongo Uri');
  process.exit();
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use(`${rootPath}/player`, playerRoutes);
app.use(`${rootPath}/location`, locationRoutes);

app.listen(serverPort, () => {
  console.log('El servidor está inicializado en el puerto ' + serverPort);
});
