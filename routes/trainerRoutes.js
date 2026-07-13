
import express from "express"
import {
  getAllSessions, createSession, updateSession, deleteSession,
  getAllNftc, createNftc, updateNftc, deleteNftc,
  getFitnessGrid, saveFitnessGrid,
} from "../controllers/trainerController.js"
const router = express.Router()
// training sessions
router.get("/sessions", getAllSessions)
router.post("/sessions", createSession)
router.put("/sessions/:id", updateSession)
router.delete("/sessions/:id", deleteSession)

// nftc
router.get("/nftc", getAllNftc)
router.post("/nftc", createNftc)
router.put("/nftc/:id", updateNftc)
router.delete("/nftc/:id", deleteNftc)

// fitness grid
router.get("/fitness-grid/:playerId", getFitnessGrid)
router.put("/fitness-grid/:playerId", saveFitnessGrid)

export default router