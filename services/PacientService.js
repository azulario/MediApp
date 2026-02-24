import pacientRepository from "../repositories/PacientRepository.js";

const getAllPacients = async () => {
    return pacientRepository.getAllPacients();
}

const getPacient = async (id) => {
    return pacientRepository.getPacientById(id);
}

const savePacient = async ({pacientId, name, login, password, email, phone}) => {
    return pacientRepository.savePacient({pacientId, name, login, password, email, phone});
}

const updatePacient = async (id, {pacientId, name, login, password, email, phone}) => {
    return pacientRepository.updatePacient(id, {pacientId, name, login, password, email, phone});
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