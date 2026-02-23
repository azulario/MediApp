import mongoose from "mongoose";
import prescriptiontService from '../services/PrescriptionService';

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'prescription date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'prescription doctor id is required']
    },
    pacientId: {
        type: String,
        required: [true, 'prescription pacient id is required']
    },
    medicineName: {
        type: String,
        required: [true, 'prescription medicine name is required']
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