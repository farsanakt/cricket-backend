import mongoose from "mongoose"

const assessmentSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  type: {
    type: String,
    enum: ["rps", "msk"],
    required: true
  },

  meta: {
    type: mongoose.Schema.Types.Mixed,   // athleteName, date, skill, assessor, height, weight, age
    default: {}
  },

  rows: {
    type: mongoose.Schema.Types.Mixed,   // { measureId: { left, right, comments } }
    default: {}
  },

  physioFindings: String                 // MSK only

}, { timestamps: true })

export default mongoose.model("Assessment", assessmentSchema)