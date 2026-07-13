import mongoose from "mongoose"

const fitnessGridSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  // { "1": { "0": { "Strength": "...", ... }, ... }, "2": {...} }  week -> day -> row -> text
  grid: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }

}, { timestamps: true })

export default mongoose.model("FitnessGrid", fitnessGridSchema)