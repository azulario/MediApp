import { express } from 'express';

import prescriptionService from '../services/PrescriptionService';

let router = express.Router();

router.get("/prescriptions", async (req, res) => {
    try {
        const prescriptions = await prescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching prescriptions" });
    }
});

router.get("/getPrescription/:id", async (req, res) => {
    try {
        const prescription = await prescriptionService.getPrescription(req.params.id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching prescription" });
    }
});

router.post("/postPrescription", async (req, res) => {
    const { doctorId, pacientId, appointmentId, medication, dosage, frequency, duration } = req.body;
    try {
        const prescription = await prescriptionService.savePrescription({ 
            doctorId, 
            pacientId, 
            appointmentId, 
            medication, 
            dosage, 
            frequency, 
            duration });
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error saving prescription" });
    }
});

router.put("/updatePrescription/:id", async (req, res) => {
    try {
        const prescription = await prescriptionService.updatePrescription(req.params.id, req.body);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating prescription" });
    }
});

router.delete("/deletePrescription/:id", async (req, res) => {
    try {
        const prescription = await prescriptionService.deletePrescription(req.params.id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting prescription" });
    }
});

export default router;
