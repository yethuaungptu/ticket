import Event from '../models/event.model';

const { getUser } = require('./base.service');

const createEvent = async (req: any, res: any) => {
    const user = await getUser(req);
    const event = new Event();
    event.name = req.body.name;
    event.creator = user.id;
    event.date = req.body.date;
    event.time = req.body.time;
    event.venue = req.body.venue;
    event.description = req.body.description;
    event.tickets = req.body.tickets;
    const data = event.save();
    return data;
};

const eventList = async (req: any, res: any) => {
    const user = await getUser(req);
    const events = await Event.find({ creator: user.id, isDeleted: false });
    return events;
};

const eventDetail = async (req: any, res: any) => {
    const user = await getUser(req);
    const event = await Event.findOne({ creator: user.id, _id: req.params.id });
    return event;
};

const eventUpdate = async (req: any, res: any) => {
    const update = {
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
        description: req.body.description,
        tickets: req.body.tickets,
        status: req.body.status
    };
    const data = await Event.findByIdAndUpdate(req.params.id, update);
    return data;
};

const eventDelete = async (req: any, res: any) => {
    const update = {
        isDeleted: true
    };
    const data = await Event.findByIdAndUpdate(req.params.id, update);
    return data;
};
export default { createEvent, eventList, eventDetail, eventUpdate, eventDelete };
