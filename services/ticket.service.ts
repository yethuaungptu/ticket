import Ticket from '../models/ticket.model';
import Event from '../models/event.model';
import _ from 'lodash';

const { getUser, getEvent } = require('./base.service');

const purchase = async (req: any, res: any) => {
    let price = 0;
    const user = await getUser(req);
    const event = await getEvent(req.body.eventId);
    const purchaseList = req.body.tickets;
    let tickets: any = [];
    let eventTickets = event.tickets;
    purchaseList.forEach((item: { code: string; count: number }) => {
        let update = _.find(eventTickets, { code: item.code });
        price += update.price * item.count;
        for (let i = 1; i <= item.count; i++) {
            tickets.push(item.code + '-' + (update.totalSeat - (update.avaliableSeat - i)));
        }
        if (update) {
            _.assign(update, {
                avaliableSeat: update.avaliableSeat - item.count
            });
        }
    });
    await Event.findByIdAndUpdate(req.body.eventId, { tickets: eventTickets });
    const ticket = new Ticket();
    ticket.eventId = req.body.eventId;
    ticket.amount = price;
    ticket.tickets = tickets;
    ticket.creator = user.id;
    const data = await ticket.save();
    return data;
};

const userPurchaseList = async (req: any, res: any) => {
    const user = await getUser(req);
    const purchases = await Ticket.find({ creator: user.id })
        .populate('eventId', 'name')
        .select('_id tickets eventId amount');
    return purchases;
};

const userPurchaseDetail = async (req: any, res: any) => {
    const purchase = await Ticket.findById({ _id: req.params.id })
        .populate('eventId')
        .select('_id tickets eventId amount');
    return purchase;
};

export default { purchase, userPurchaseList, userPurchaseDetail };
