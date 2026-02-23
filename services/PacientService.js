import patientRepository from "../repositories/PatientRepository";

const getAllPacients = async () => {
    return patientRepository.getAllPacients();
}

const getPacient = async (id) => {
    return patientRepository.getPacientById(id);
}

const savePacient = async ({pacientId, name, login, password, email, phone}) => {
    return patientRepository.savePacient({pacientId, name, login, password, email, phone});
}

const updatePacient = async (id, {pacientId, name, login, password, email, phone}) => {
    return patientRepository.updatePacient(id, {pacientId, name, login, password, email, phone});
}

const deletePacient = async (id) => {
    return patientRepository.deletePacient(id);
}

const pacienttService = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacienttService;