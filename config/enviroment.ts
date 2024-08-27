import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve((process.env.NODE_ENV || '') + '.env')
});

const PORT: any = process.env.PORT;
const MONGO: any = process.env.MONGODB_URL;

export default {
    PORT,
    MONGO
};
