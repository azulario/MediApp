import mongoose from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'prescription date is required']
    },
    appointmentId: {
        type: String,
        required: [true, 'appointment id is required']
    },
    medication: {
        type: String,
        required: [true, 'prescription medication is required']
    },
    dosage: {
        type: String,
        required: [true, 'prescription dosage is required']
    },
    instructions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;