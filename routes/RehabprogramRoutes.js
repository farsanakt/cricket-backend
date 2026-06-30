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

const router = express.Router();

router.post("/", createRehabProgram);

router.get("/player/:playerId", getRehabProgramsByPlayer);
router.get("/:id", getRehabProgramById);

router.put("/:id", updateRehabProgram);
router.delete("/:id", deleteRehabProgram);

router.post("/:id/session", addRehabSession);
router.put("/:id/session/:sessionId", updateRehabSession);
router.delete("/:id/session/:sessionId", deleteRehabSession);

export default router;