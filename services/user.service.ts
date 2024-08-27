import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';

const { checkDuplicateField, getUser } = require('./base.service');

const register = async (req: any, res: any) => {
    const user = new User();
    await checkDuplicateField({ email: req.body.email }, User);
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    const data = user.save();
    return data;
};

const checkAccount = async (req: any, res: any) => {
    const user = await User.findOne({ email: req.body.email });
    return user;
};

const login = async (req: any, res: any, data: any) => {
    if (data != null && bcrypt.compareSync(req.body.password, data.password)) {
        const accessToken = jwt.sign({ id: data._id, name: data.name }, 'ticket@2024', {
            expiresIn: '3h'
        });
        res.setHeader('Set-Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })]);
        return true;
    } else {
        return false;
    }
};

const userData = async (req: any) => {
    const user = await getUser(req);
    const userData = await User.findById(user.id);
    return userData;
};

export default { register, checkAccount, login, userData };
