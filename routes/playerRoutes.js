import express from "express"
import { getPlayerDashboard } from "../controllers/playercontroller.js"

const router = express.Router()

router.get("/:id", getPlayerDashboard)

export default router