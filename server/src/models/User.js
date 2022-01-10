import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birth: {
        dayOfBirth: {
            type: Number,
            required: true
        },
        monthOfBirth: {
            type: Number,
            required: true
        },
        yearOfBith: {
            type: Number,
            required: true
        }
    },
    sex: {
        sexId: {
            type: Number,
            required: true
        },
        sexType: {
            type: String,
            required: true
        }
    },
    levelUser: {
        type: String,
        required: true,
        default: "USER"
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

export default mongoose.model('User', userSchema);