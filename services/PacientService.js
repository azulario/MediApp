import pacientRepository from "../repositories/PacientRepository.js";

const getAllPacients = async () => {
    return pacientRepository.getAllPacients();
}

const getPacient = async (id) => {
    return pacientRepository.getPacientById(id);
}

const savePacient = async ({pacientId, name, birthDate, email, phone}) => {
    return pacientRepository.savePacient({pacientId, name, birthDate, email, phone});
}

const updatePacient = async (id, {pacientId, name, birthDate, email, phone}) => {
    return pacientRepository.updatePacient(id, {pacientId, name, birthDate, email, phone});
}

const deletePacient = async (id) => {
    return pacientRepository.deletePacient(id);
}

const pacienttService = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacienttService;