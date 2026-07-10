import mongoose from "mongoose"

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  category: {
    type: String,
    enum: ["Senior", "Under-23", "Under-19", "Under-16", "Under-14", "Under-10"]
  },

  shortName: String,

  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  physio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  nutritionist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
  }]

}, { timestamps: true })

export default mongoose.model("Team", teamSchema)