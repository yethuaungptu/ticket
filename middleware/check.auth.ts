import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import env from '../config/enviroment';

export default function (req: any, res: any, next: any) {
    try {
        const token = cookie.parse(req.headers.cookie).JWT_COOKIE_USER;
        const decode = jwt.verify(token, env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Auth failed, Please login user account'
        });
    }
}
