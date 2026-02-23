import Pacient from "../models/Pacient.js";

const getAllPacients = async () => {
    return await Pacient.find();
}

const getPacientById = async (id) => {
    try {
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error('Failed to retrieve pacient');
    }
}

const savePacient = async ({pacientId, name, login, password, email, phone}) => {
   try {
        const pacient = new Pacient({
            pacientId,
            name,
            login,
            password,
            email,
            phone
        });
        return await pacient.save();
    } catch (error) {
        throw new Error('Failed to save pacient');
   }
}

const updatePacient = async (id, {pacientId, name, login, password, email, phone}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {
            pacientId,
            name,
            login,
            password,
            email,
            phone
        }, { new: true });

    } catch (error) {
        throw new Error('Failed to update pacient');
    }
}

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Failed to delete pacient');
    }
}

const pacientRepository = {
    getAllPacients,
    getPacientById,
    savePacient,
    updatePacient,
    deletePacient
};

export default pacientRepository;