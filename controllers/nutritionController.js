import NutritionPlan from "../models/nutritionPlanModel.js"

// get all nutrition plans
export const getAllNutritionPlans = async (req, res) => {
  try {
    const plans = await NutritionPlan.find().sort({ createdAt: -1 })
    res.status(202).json(plans)
  } catch (error) {
    console.log('error in fetching nutrition plans', error)
    res.status(500).json({ message: error.message })
  }
}

// create nutrition plan
export const createNutritionPlan = async (req, res) => {
  try {
    console.log('this is the create nutrition plan body', req.body)
    const plan = await NutritionPlan.create(req.body)
    res.status(201).json(plan)
  } catch (error) {
    console.log('error in creating nutrition plan', error)
    res.status(500).json({ message: error.message })
  }
}

// delete nutrition plan
export const deleteNutritionPlan = async (req, res) => {
  try {
    const { id } = req.params
    const plan = await NutritionPlan.findByIdAndDelete(id)

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" })
    }

    res.status(202).json({ message: "Plan deleted", plan })
  } catch (error) {
    console.log('error in deleting nutrition plan', error)
    res.status(500).json({ message: error.message })
  }
}