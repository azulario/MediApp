import prescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async () => {
    return prescriptionRepository.getAllPrescriptions();
}

const getPrescription = async (id) => {
    return prescriptionRepository.getPrescriptionById(id);
}

const savePrescription = async ({date, appointmentId, medication, dosage, instructions}) => {
    return prescriptionRepository.savePrescription({
        date, 
        appointmentId,
        medication, 
        dosage, 
        instructions});
}

const updatePrescription = async (id, {date, appointmentId, medication, dosage, instructions}) => {
    return prescriptionRepository.updatePrescription(id, {
        date, 
        appointmentId,
        medication, 
        dosage, 
        instructions});
}

const deletePrescription = async (id) => {
    return prescriptionRepository.deletePrescription(id);
}

const prescriptionService = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}
export default prescriptionService;