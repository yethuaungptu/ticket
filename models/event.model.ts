import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tickets: [
        {
            category: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            code: {
                type: String,
                required: true
            },
            totalSeat: {
                type: Number,
                required: true
            },
            avaliableSeat: {
                type: Number,
                required: true
            }
        }
    ],
    status: {
        type: String,
        default: '1' // 0 is finish, 1 is not finish
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

export default mongoose.model('Event', eventSchema);
