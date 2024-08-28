import Joi from 'joi';

const create = Joi.object({
    eventId: Joi.string().required(),
    tickets: Joi.array().items(
        Joi.object({
            code: Joi.string().required(),
            count: Joi.number().required()
        })
    )
});

export default { create };
