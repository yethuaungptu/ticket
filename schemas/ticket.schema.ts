import Joi from 'joi';

const create = Joi.object({
    eventId: Joi.string().required(),
    tickets: Joi.array().min(1).required()
});

export default { create };
