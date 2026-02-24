import { express } from 'express';
import bcrypt, { hash } from 'bcrypt';
import doctorService from '../services/DoctorService';

let router = express.Router();

router.get("/doctors", async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching doctors" });
    }
});

router.get("/getDoctor/:id", async (req, res) => {
    try {
        const doctor = await doctorService.getDoctor(req.params.id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching doctor" });
    }
});

router.post("/postDoctor", async (req, res) => {
    const {name, login, password, medicalSpecialization, medicalRegistration, email, phone } = req.body;
    try {
        const hashedPassword = await hash(password, 10);
        const doctor = await doctorService.saveDoctor({ 
            name, 
            login, 
            password: hashedPassword, 
            medicalSpecialization, 
            medicalRegistration, 
            email, 
            phone });
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error saving doctor" });
    }
});

router.put("/putDoctor/:id", async (req, res) => {
    try {
        const doctor = await doctorService.updateDoctor(req.params.id, req.body);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating doctor" });
    }
});

router.delete("/deleteDoctor/:id", async (req, res) => {
    try {
        const doctor = await doctorService.deleteDoctor(req.params.id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting doctor" });
    }
});

export default router;