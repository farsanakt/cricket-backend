import express from "express";
import { getPlayerDashboard, getAllPlayers,getAllInjuryData } from "../controllers/playerController.js";

const router = express.Router();

router.get("/allplayers", getAllPlayers);

router.get('/allinjury',getAllInjuryData)
router.get("/:id", getPlayerDashboard);


export default router;