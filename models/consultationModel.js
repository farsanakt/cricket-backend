import mongoose from "mongoose"

const consultationSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  date: Date,
  physioName: String,

  chiefComplaint: String,
  historyOfInjury: String,
  observation: String,
  palpation: String,
  rangeOfMotion: String,
  specialTests: String,
  diagnosis: String,
  treatmentPlan: String,
  advice: String,

  playerStatus: {
    type: String,
    enum: ["Available", "Injured", "Niggles", "Rest"],
  },
  consultedBy: String,

  followUpDate: Date

}, { timestamps: true })

export default mongoose.model("Consultation", consultationSchema)