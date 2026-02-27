import Prescription from "../models/Prescription.js";

const getAllPrescriptions = async () => {
    return await Prescription.find();
}

const getPrescriptionById = async (id) => {
    try {
        return await Prescription.findById(id);
    } catch (error) {
        throw new Error('Failed to retrieve prescription: ' + error.message);
    }
}

const savePrescription = async ({date, doctorId, pacientId, medication, dosage}) => {
    try {
        const prescription = new Prescription({
            date,
            doctorId,
            pacientId,
            medication,
            dosage
        });
        return await prescription.save();
    } catch (error) {
        throw new Error('Failed to save prescription: ' + error.message);
    }
}

const updatePrescription = async (id, {date, doctorId, pacientId, medication, dosage}) => {
    try {
        return await Prescription.findByIdAndUpdate(id, {
            date,
            doctorId,
            pacientId,
            medication,
            dosage
        }, { new: true });  
    } catch (error) {
        throw new Error('Failed to update prescription: ' + error.message);
    }
}

const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Failed to delete prescription: ' + error.message);
    }
}

const prescriptionRepository = {
    getAllPrescriptions,
    getPrescriptionById,
    savePrescription,
    updatePrescription,
    deletePrescription
};

export default prescriptionRepository;