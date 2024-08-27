import Event from '../models/event.model';

const list = async (req: any, res: any) => {
    const events = await Event.find({ isDeleted: false }).select('_id name date time venue description tickets');
    return events;
};

const detail = async (req: any, res: any) => {
    const event = await Event.findOne({ _id: req.params.id, isDeleted: false });
    return event;
};

export default { list, detail };
