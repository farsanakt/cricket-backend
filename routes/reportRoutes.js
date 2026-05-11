import express from "express"
import { createReport } from "../controllers/reportcontroller.js"

const router = express.Router()

router.post("/", createReport)

export default router   