import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from './config/morgan';
import './config/mongoose';
import indexRouter from './routes/index';
import userRouter from './routes/user';
import errorHandler from './middleware/error.handler';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan);

app.use('/api', indexRouter);
app.use('/api/user', userRouter);

app.use(errorHandler.handler);

export default app;
