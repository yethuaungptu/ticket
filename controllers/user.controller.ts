import baseController from './base.controller';
import userService from '../services/user.service';
import eventService from '../services/event.service';
import ticketService from '../services/ticket.service';

const register = async (req: any, res: any) => {
    const data = await userService.register(req, res);
    baseController.created(res, 'Account register success', data);
};

const login = async (req: any, res: any) => {
    const user = await userService.checkAccount(req, res);
    const data = await userService.login(req, res, user);
    if (data) {
        baseController.ok(res, 'Account login success', data);
        return;
    }
    baseController.notFound(res, 'Email not found or password not match');
};

const index = async (req: any, res: any) => {
    baseController.ok(res, 'User Homepage');
};

const createEvent = async (req: any, res: any) => {
    const event = await eventService.createEvent(req, res);
    if (event) {
        baseController.created(res, 'Event create success', event);
        return;
    }
    baseController.error(res, 'Account creation unsuccess');
};

const eventList = async (req: any, res: any) => {
    const events = await eventService.eventList(req, res);
    if (events.length > 0) {
        baseController.ok(res, 'User event list', events);
        return;
    }
    baseController.notFound(res, 'Event not found');
};

const eventDetail = async (req: any, res: any) => {
    const event = await eventService.eventDetail(req, res);
    if (event) {
        baseController.ok(res, 'Event detail', event);
        return;
    }
    baseController.notFound(res, 'Event data not found');
};

const eventUpdate = async (req: any, res: any) => {
    const event = await eventService.eventUpdate(req, res);
    if (event) {
        baseController.ok(res, 'Event update success');
        return;
    }
    baseController.error(res, 'Event update unsuccess');
};

const eventDelete = async (req: any, res: any) => {
    const event = await eventService.eventDelete(req, res);
    if (event) {
        baseController.ok(res, 'Event delete success');
        return;
    }
    baseController.error(res, 'Event delete unsuccess');
};

const purchaseList = async (req: any, res: any) => {
    const tickets = await ticketService.userPurchaseList(req, res);
    if (tickets.length > 0) {
        baseController.ok(res, 'User ticket purchase list', tickets);
        return;
    }
    baseController.notFound(res, 'No ticket purchase list');
};

const purchaseDetail = async (req: any, res: any) => {
    const ticket = await ticketService.userPurchaseDetail(req, res);
    if (ticket) {
        baseController.ok(res, 'User ticket purchase detail', ticket);
        return;
    }
    baseController.notFound(res, 'No ticket purchase detail');
};

export default {
    register,
    login,
    index,
    createEvent,
    eventList,
    eventDetail,
    eventUpdate,
    eventDelete,
    purchaseList,
    purchaseDetail
};
