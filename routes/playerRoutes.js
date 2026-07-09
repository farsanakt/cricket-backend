import express from "express";
import { getPlayerDashboard, getAllPlayers,getAllInjuryData, allTeams,updatePlayer } from "../controllers/playerController.js";

const router = express.Router();

router.get("/allplayers", getAllPlayers);

router.get('/allinjury',getAllInjuryData)
router.get('/allteams',allTeams)
router.put("/:id", updatePlayer)
router.get("/:id", getPlayerDashboard);


export default router;