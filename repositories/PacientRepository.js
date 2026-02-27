import Pacient from "../models/Pacient.js";

const getAllPacients = async () => {
    return await Pacient.find();
}

const getPacientById = async (id) => {
    try {
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error('Failed to retrieve pacient: ' + error.message);
    }
}

const savePacient = async ({pacientId, name, birthDate, email, phone}) => {
   try {
        const id = pacientId || Date.now().toString();
        const pacient = new Pacient({
            pacientId: id,
            name,
            birthDate,
            email,
            phone
        });
        return await pacient.save();
    } catch (error) {
        throw new Error('Failed to save pacient: ' + error.message);
   }
}

const updatePacient = async (id, {name, birthDate, email, phone}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {
            name,
            birthDate,
            email,
            phone
        }, { new: true });

    } catch (error) {
       throw new Error('Failed to update pacient: ' + error.message);
    }
}

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Failed to delete pacient: ' + error.message);
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