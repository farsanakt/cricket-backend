import express from "express";

import {
  getAllMedicalHistories, createMedicalHistory, updateMedicalHistory, deleteMedicalHistory,
  getAllMedications, createMedication, updateMedication, deleteMedication,
} from "../controllers/medicalController.js"
const router = express.Router();
// medical history
router.get("/medical-histories", getAllMedicalHistories)
router.post("/medical-histories", createMedicalHistory)
router.put("/medical-histories/:id", updateMedicalHistory)
router.delete("/medical-histories/:id", deleteMedicalHistory)

// medications
router.get("/medications", getAllMedications)
router.post("/medications", createMedication)
router.put("/medications/:id", updateMedication)
router.delete("/medications/:id", deleteMedication)

export default router