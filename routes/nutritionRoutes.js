
import express from "express";
import { getAllNutritionPlans, createNutritionPlan, deleteNutritionPlan } from "../controllers/nutritionController.js"
const router = express.Router();


router.get("/nutrition-plans", getAllNutritionPlans)
router.post("/nutrition-plans", createNutritionPlan)
router.delete("/nutrition-plans/:id", deleteNutritionPlan)

export default router