import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    birth: Date,
    sex: String,
    createdAt: Date,
});

export default mongoose.model('User', userSchema);