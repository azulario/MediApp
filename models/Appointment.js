import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema;

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

const Appointment = Mongoose.model('Appointment', appointmentSchema);

export default Appointment;