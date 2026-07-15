import mongoose from "mongoose";

const coachDailyReportSchema = new mongoose.Schema(
  {
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coach",
      required: true,
    },

    mood: String,

    energyLevel: String,

    sessionType: String,

    playersCoached: Number,

    highlights: String,

    challenges: String,

    notes: String,

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "CoachDailyReport",
  coachDailyReportSchema
);