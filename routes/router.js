import { express } from "express";
import appointmentController from "./AppointmentController";
import doctorController from "./DoctorController";
import patientController from "./PatientController";
import prescriptionController from "./PrescriptionController";


let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("hi!");
        res.status(200).json({ message: "hi!" });
    }
);

router.use("/appointments", appointmentController);
router.use("/doctors", doctorController);
router.use("/patients", patientController);
router.use("/prescriptions", prescriptionController);

export default router;