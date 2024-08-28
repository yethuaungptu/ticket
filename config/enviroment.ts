import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve((process.env.NODE_ENV || '') + '.env')
});

const PORT: any = process.env.PORT;
const MONGO: any = process.env.MONGODB_URL;
const EXPIRES_IN: any = process.env.EXPIRES_IN;
const JWT_SECRET: any = process.env.JWT_SECRET;

export default {
    PORT,
    MONGO,
    EXPIRES_IN,
    JWT_SECRET
};
