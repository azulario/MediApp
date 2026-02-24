import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    doctorId: {
        type: String,
        required: [true, 'doctor id is required']
    },
    name: {
        type: String,
        required: [true, 'doctor name is required']
    },
    login: {
        type: String,
        required: [true, 'doctor login is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'doctor password is required'],
        unique: true
    },
    medicalSpecialization: {
        type: String,
        required: [true, 'medical specialization is required']
    },
    medicalRegistration: {
        type: String,
        required: [true, 'medical registration is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'doctor email is required'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'doctor phone number is required'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;