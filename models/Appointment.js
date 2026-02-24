import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'appointment date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'doctor id is required']
    },
    patientId: {
        type: String,
        required: [true, 'patient id is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;