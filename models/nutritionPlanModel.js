import mongoose from "mongoose"

const nutritionPlanSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  title: {
    type: String,
    required: true
  },

  date: Date,

 
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  fiber: Number,
  water: Number,

  
  meals: [{
    name: String,
    items: String
  }],

  supplements: [String],

  hydration: String,
  sleepTarget: String,

  notes: String

}, { timestamps: true })

export default mongoose.model("NutritionPlan", nutritionPlanSchema)