import http from 'http';
import app from './app';
import env from './config/enviroment';

const server = http.createServer(app);

server.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});
