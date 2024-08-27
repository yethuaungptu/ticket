import validator from '../middleware/request.body.validator';
import userSchema from '../schemas/user.schema';

const register = (req: any, res: any, next: any) => {
    const message = validator(userSchema.register, req.body);
    message == null ? next() : res.status(422).json({ status: 'fail', message: message });
};

const login = (req: any, res: any, next: any) => {
    const message = validator(userSchema.login, req.body);
    message == null ? next() : res.status(422).json({ status: 'fail', message: message });
};

export default { register, login };
