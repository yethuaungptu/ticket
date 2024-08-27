import mongoose from 'mongoose';
import env from './enviroment';

mongoose
    .connect(env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err: any) => console.error('Cannot connect to MongoDB : ', err.message));
