import express from "express";
import { getPlayerDashboard, getAllPlayers,getAllInjuryData, allTeams,updatePlayer ,loginPlayer} from "../controllers/playerController.js";
import { deletePlayer } from "../controllers/playerController.js"
import {  createInjury, updateInjury, deleteInjury } from "../controllers/playerController.js"


const router = express.Router();

router.get("/allplayers", getAllPlayers);
router.post("/playerlogin", loginPlayer);

// router.get("/injuries", getAllInjuries)
// router.get("/injuries/player/:playerId", getPlayerInjuries)
router.post("/injuries", createInjury)
// router.put("/injuries/:id/clearance", requestClearance)
router.put("/injuries/:id", updateInjury)
router.delete("/injuries/:id", deleteInjury)

router.delete("/:id", deletePlayer)
router.get('/allinjury',getAllInjuryData)
router.get('/allteams',allTeams)
router.put("/:id", updatePlayer)
router.get("/:id", getPlayerDashboard);



export default router;