import mongoose from "mongoose"

const medicationSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  medicationName: {
    type: String,
    required: true
  },

  startDate: Date,
  stopDate: Date,

  prescriber: String,
  dose: String,
  frequency: String,

  selfAdministered: {
    type: Boolean,
    default: false
  },

  possibleSideEffects: String,
  specialInstructions: String,

  locked: {
    type: Boolean,
    default: false
  },

  recordedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true })

export default mongoose.model("Medication", medicationSchema)