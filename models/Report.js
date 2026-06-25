import mongoose from "mongoose"

const reportSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  soreness: Number,
  fatigue: Number,
  sleep: Number,
  motivation: Number,
  rpe: Number,
  ballsBowled: Number,

  pain: Boolean,
  injuryNote: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

})

export default mongoose.model("Report", reportSchema)