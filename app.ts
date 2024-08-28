import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from './config/morgan';
import './config/mongoose';
import indexRouter from './routes/index';
import userRouter from './routes/user';
import errorHandler from './middleware/error.handler';
import env from './config/enviroment';
import http from 'http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan);

app.use('/api', indexRouter);
app.use('/api/user', userRouter);

app.use(errorHandler.handler);

const server = http.createServer(app);

server.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});

export default server;
