import mongoose from "mongoose"

const teamSchema = new mongoose.Schema({
  name: String,

  coach: String,

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
    ref: "User"
  }]
})

export default mongoose.model("Team", teamSchema)