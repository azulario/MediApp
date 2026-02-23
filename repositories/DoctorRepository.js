import Doctor from "../models/Doctor";

const getAllDoctors = async () => {
    return await Doctor.find();
}

const getDoctorById = async (id) => {
    try {
        return await Doctor.findById(id);
    } catch (error) {
        throw new Error('Failed to retrieve doctor');
    }
}

const saveDoctor = async ({doctorId, name, login, password, medicalSpecialization, medicalRegistration, email, phone}) => {
   try {
        const doctor = new Doctor({
            doctorId,
            name,
            login,
            password,
            medicalSpecialization,
            medicalRegistration,
            email,
            phone
        });
        return await doctor.save();
    } catch (error) {
        throw new Error('Failed to save doctor');
   }
}

const updateDoctor = async (id, {doctorId, name, login, password, medicalSpecialization, medicalRegistration, email, phone}) => {
    try {
        return await Doctor.findByIdAndUpdate(id, {
            doctorId,
            name,
            login,
            password,
            medicalSpecialization,
            medicalRegistration,
            email,
            phone
        }, { new: true });

    } catch (error) {
        throw new Error('Failed to update doctor');
    }

}

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Failed to delete doctor');
    }
}

const doctorRepository = {
    getAllDoctors,
    getDoctorById   
};

export default doctorRepository;