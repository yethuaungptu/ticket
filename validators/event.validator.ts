import validator from '../middleware/request.body.validator';
import eventSchema from '../schemas/event.schema';

const create = (req: any, res: any, next: any) => {
    const message = validator(eventSchema.create, req.body);
    message == null ? next() : res.status(422).json({ status: 'fail', message: message });
};

const update = (req: any, res: any, next: any) => {
    const message = validator(eventSchema.update, req.body);
    message == null ? next() : res.status(422).json({ status: 'fail', message: message });
};

export default { create, update };
