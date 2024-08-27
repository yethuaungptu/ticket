import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    venue: Joi.string().required(),
    description: Joi.string().required(),
    tickets: Joi.array().min(1).required()
});

const update = Joi.object({
    name: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    venue: Joi.string().required(),
    description: Joi.string().required(),
    tickets: Joi.array().min(1).required(),
    status: Joi.string().required()
});

export default { create, update };
