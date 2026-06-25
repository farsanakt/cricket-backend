import mongoose from "mongoose"

const injurySchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  type: String,          // e.g. Knee Injury
  bodyPart: String,      // e.g. Knee
  severity: {
    type: String,
    enum: ["Mild", "Moderate", "Severe"],
    default: "Mild"
  },

  status: {
    type: String,
    enum: ["active", "ClearanceRequested", "Cleared"],
    default: "Active"
  },

  description: String,

  dateReported: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true })

export default mongoose.model("Injury", injurySchema)