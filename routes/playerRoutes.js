import express from "express"
import { getPlayerDashboard } from "../controllers/playerController.js"

const router = express.Router()

router.get("/:id", getPlayerDashboard)

export default router