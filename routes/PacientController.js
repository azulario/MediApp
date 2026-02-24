import express from 'express';
import pacienttService from '../services/PacientService.js';

let router = express.Router();

router.get("/pacients", async (req, res) => {
    try {
        const pacients = await pacienttService.getAllPacients();
        res.send(pacients);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching pacients" });
    }
});

router.get("/getPacient/:id", async (req, res) => {
    try {
        const pacient = await pacienttService.getPacient(req.params.id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching pacient" });
    }
});

router.post("/postPacient", async (req, res) => {
    const { name, login, password, email, phone } = req.body;
    try {
        const pacient = await pacienttService.savePacient({ 
            name, 
            login, 
            password, 
            email, 
            phone });
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error saving pacient" });
    }
});

router.put("/updatePacient/:id", async (req, res) => {
    try {
        const pacient = await pacienttService.updatePacient(req.params.id, req.body);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating pacient" });
    }
});

router.delete("/deletePacient/:id", async (req, res) => {
    try {
        const pacient = await pacienttService.deletePacient(req.params.id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting pacient" });
    }
});

export default router;
