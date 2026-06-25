import express from "express"
import { fetchExistingWrks } from '../controllers/exercisesController.js'
const router =express.Router()

router.get('/existingworkouts',fetchExistingWrks)

export default router