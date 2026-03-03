import mongoose from "mongoose";
import Doctor from "./Doctor";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'appointment date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'doctor id is required'],
        validate: {
            validator: function(v) {
                const id = new mongoose.Types.ObjectId(v); // converte o valor para ObjectId
                return Doctor.exists({ _id: id }); // verifica se o doctorId existe na coleção de médicos
            },
            message: props => `Doctor ID ${props.value} not found! Please provide a valid doctor ID.`
        }
    },
    pacientId: {
        type: String,   
        required: [true, 'pacient id is required'],
        validate: {
            validator: function(v) {
            const id = new mongoose.Types.ObjectId(v); // converte o valor para ObjectId
            return Pacient.exists({ _id: id }); // verifica se o pacientId existe na coleção de pacientes
            },
            message: props => `Pacient ID ${props.value} not found! Please provide a valid pacient ID.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;