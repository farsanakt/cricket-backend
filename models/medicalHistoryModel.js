import mongoose from "mongoose"

const medicalHistorySchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  anyIllness: String,
  anySurgery: String,
  bloodTestDate: Date,

  // blood markers: [{ test: "Hemoglobin", value: "13.5", unit: "g/dL", remarks: "" }]
  bloodMarkers: [{
    test: String,
    value: String,
    unit: String,
    remarks: String
  }],

  cardiac: String,
  pulmonary: String,
  scat6Baseline: String,
  previousConcussion: String,
  vaccination: String,

  recordedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true })

export default mongoose.model("MedicalHistory", medicalHistorySchema)