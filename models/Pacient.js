import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
    pacientId: {
        type: String,
        required: [true, 'pacient id is required']
    },
    name: {
        type: String,
        required: [true, 'pacient name is required']
    },
    birthDate: {
        type: Date,
        required: [true, 'pacient birth date is required']
    },
    email: {
        type: String,
        required: [true, 'pacient email is required'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'pacient phone number is required'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Pacient = mongoose.model('Pacient', pacientSchema);

export default Pacient;