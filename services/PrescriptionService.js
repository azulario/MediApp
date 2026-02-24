import prescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async () => {
    return prescriptionRepository.getAllPrescriptions();
}

const getPrescription = async (id) => {
    return prescriptionRepository.getPrescriptionById(id);
}

const savePrescription = async ({date, doctorId, pacientId, medication, dosage}) => {
    return prescriptionRepository.savePrescription({date, doctorId, pacientId, medication, dosage});
}

const updatePrescription = async (id, {date, doctorId, pacientId, medication, dosage}) => {
    return prescriptionRepository.updatePrescription(id, {date, doctorId, pacientId, medication, dosage});
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