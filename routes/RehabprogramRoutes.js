import express from "express";
import {
  createRehabProgram,
  getRehabProgramsByPlayer,
  getRehabProgramById,
  updateRehabProgram,
  deleteRehabProgram,
  addRehabSession,
  updateRehabSession,
  deleteRehabSession,
} from "../controllers/rehabProgramController.js";

import { createAssessment, updateAssessment, deleteAssessment ,getAllAssessments} from "../controllers/assessmentController.js"
const router = express.Router();

router.post("/", createRehabProgram);

// router.get("/:playerId", getPlayerAssessments)
router.post("/assessments", createAssessment)
router.get("/assess", getAllAssessments)

router.get("/player/:playerId", getRehabProgramsByPlayer);
router.get("/:id", getRehabProgramById);

router.put("/:id", updateRehabProgram);
router.delete("/:id", deleteRehabProgram);

router.post("/:id/session", addRehabSession);
router.put("/:id/session/:sessionId", updateRehabSession);
router.delete("/:id/session/:sessionId", deleteRehabSession);

router.put("/assessment/:id", updateAssessment)
router.delete("/assessment/:id", deleteAssessment)

export default router;