import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    venue: Joi.string().required(),
    description: Joi.string().required(),
    tickets: Joi.array().items(
        Joi.object({
            category: Joi.string().required(),
            price: Joi.number().required(),
            code: Joi.string().required(),
            totalSeat: Joi.number().required(),
            avaliableSeat: Joi.number().required()
        })
    )
});

const update = Joi.object({
    name: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    venue: Joi.string().required(),
    description: Joi.string().required(),
    tickets: Joi.array().items(
        Joi.object({
            category: Joi.string().required(),
            price: Joi.number().required(),
            code: Joi.string().required(),
            totalSeat: Joi.number().required(),
            avaliableSeat: Joi.number().required()
        })
    ),
    status: Joi.string().required()
});

export default { create, update };
