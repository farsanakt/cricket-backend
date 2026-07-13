import mongoose from "mongoose"

const nftcEntrySchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },

  date: Date,
  testBy: String,
  notes: String,

  // test results: { "10m": "1.6", "20m": "3.2", "40m": "...", slj, runthree, yoyo, dexa }
  results: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }

}, { timestamps: true })

export default mongoose.model("NftcEntry", nftcEntrySchema)