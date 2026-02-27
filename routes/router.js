import express from "express";
import bcrypt from "bcrypt";
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";
// import doctorService from "../services/DoctorService.js";

import jwt from "jsonwebtoken";


let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("hi!");
        res.status(200).json({ message: "hi!" });
    }
);

// router.post('/login', async (req, res) => {
//     try {
//         const { login, password } = req.body;
//         const doctor = await doctorService.getDoctorByLogin(login);
//         if (!doctor) {
//             return res.status(404).json({ message: "Authetication failed" });
//         }
        
//         const passwordMatch = await doctorService.comparePassword(password, doctor.password);
//         if (!passwordMatch) {
//             return res.status(404).json({ message: "Authetication failed" });
//         }

//         const token = jwt.sign({doctorId: doctor._id}, 'you-secret-key', {
//             expiresIn: '1h'
//         });

//         res.json({ token });    


//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Login Failed" });
//     }
// });

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

export default router;