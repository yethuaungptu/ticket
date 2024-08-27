import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import Event from '../models/event.model';
const { alreadyExistsError } = require('../errors/db.error');

exports.checkDuplicateField = async (obj: any, Model: any) => {
    const document = await Model.findOne(obj);
    if (document) {
        throw alreadyExistsError(Object.values(obj) + ' is duplicated', document);
    } else {
        return false;
    }
};

exports.getUser = async (req: any) => {
    try {
        return jwt.verify(cookie.parse(req.headers.cookie).JWT_COOKIE_USER, 'ticket@2024');
    } catch {
        return false;
    }
};

exports.getEvent = async (id: string) => {
    const document = await Event.findById(id);
    if (document) return document;
    else return false;
};
