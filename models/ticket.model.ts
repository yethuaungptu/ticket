import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    tickets: {
        type: Array,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Ticket', ticketSchema);
