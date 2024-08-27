import dayjs from 'dayjs';
import morgan from 'morgan';

export default morgan((tokens: any, req: any, res: any) =>
    [
        ` [${dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss')}]`,
        tokens.url(req, res),
        tokens.method(req, res),
        tokens.status(req, res),
        res.statusMessage
    ].join(' -')
);
