import mongoose from "mongoose"

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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