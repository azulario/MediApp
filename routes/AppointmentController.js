import { express } from 'express';
import appointmentService from '../services/AppointimentService';

let router = express.Router();

router.get("/appointments", async (req, res) => {
    try {
        const appointments = await appointmentService.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching appointments" });
    }
});

router.get("/getAppointment/:id", async (req, res) => {
    try {
        const appointment = await appointmentService.getAppointment(req.params.id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching appointment" });
    }
});

router.post("/saveAppointment", async (req, res) => {
    try {
        const appointment = await appointmentService.saveAppointment(req.body);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error saving appointment" });
    }
});

router.put("/updateAppointment/:id", async (req, res) => {
    try {
        const appointment = await appointmentService.updateAppointment(req.params.id, req.body);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating appointment" });
    }
});

router.delete("/deleteAppointment/:id", async (req, res) => {
    try {
        const appointment = await appointmentService.deleteAppointment(req.params.id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting appointment" });
    }
});

export default router;
