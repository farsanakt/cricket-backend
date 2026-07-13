import mongoose from "mongoose";

const dailyReportSchema = new mongoose.Schema(
  {
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },

    name: {
      type: String,
      
    },

    urineColour: String,

    soreness: Number,

    fatigue: Number,

    sleep: Number,

    injury: Boolean,

    note:String,

    injuryFile: String,

    motivation: Number,

    ballsBowled: Number,

    rpe: Number,

    training: [String],
  },
  {
    timestamps: true,
  }
);

const DailyReport = mongoose.model(
  "DailyReport",
  dailyReportSchema
);

export default DailyReport;