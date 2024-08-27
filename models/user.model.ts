import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password || '', bcrypt.genSaltSync(8));
    next();
});

export default mongoose.model('User', userSchema);
