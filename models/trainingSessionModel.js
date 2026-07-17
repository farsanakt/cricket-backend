import mongoose from "mongoose"

const trainingSessionSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  name: String,
  type: String,      
  date: Date,
  description: String,

  plannedLoad: Number,
  reportedLoad: Number,
  durationMins: Number,

  exercises: [{
    name: String,
    sets: String,
    reps: String,
    rest: String,
    duration: String,
    equipment: String,
    description: String,
    load: String,
    gifUrl: String 
  }]

}, { timestamps: true })

export default mongoose.model("TrainingSession", trainingSessionSchema)