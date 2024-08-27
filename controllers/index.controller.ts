import baseController from './base.controller';
import indexService from '../services/index.service';
import eventService from '../services/event.public.service';
import ticketService from '../services/ticket.service';

const index = async (req: any, res: any) => {
    const data = await indexService.index();
    baseController.ok(res, 'Index data', data);
};

const eventList = async (req: any, res: any) => {
    const events = await eventService.list(req, res);
    if (events.length > 0) baseController.ok(res, 'Event list', events);
    else baseController.notFound(res, 'Event not found');
};

const eventDetail = async (req: any, res: any) => {
    const event = await eventService.detail(req, res);
    if (event) baseController.ok(res, 'Event Detail', event);
    else baseController.notFound(res, 'Event not found');
};

const purchaseTicket = async (req: any, res: any) => {
    const data = await ticketService.purchase(req, res);
    if (data) baseController.ok(res, 'Purchase success', data);
    else baseController.error(res, 'Purchase fail');
};
export default { index, eventList, eventDetail, purchaseTicket };
