import Joi from 'joi';

const register = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

const login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export default { register, login };
