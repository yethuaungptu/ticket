import validator from '../middleware/request.body.validator';
import ticketSchema from '../schemas/ticket.schema';

const purchase = (req: any, res: any, next: any) => {
    const message = validator(ticketSchema.create, req.body);
    message == null ? next() : res.status(422).json({ status: 'fail', message: message });
};

export default { purchase };
