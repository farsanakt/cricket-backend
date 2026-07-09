import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      sparse: true,
    },

    password: {
      type: String,
      required: true,
    },

    number: String,

    role: String,

    age: Number,

    weight: Number,

    height: Number,

    bloodGroup: String,

    dob: Date,

    phone: String,

    location: String,

    dominantHand: {
      type: String,
      enum: ["Right", "Left"],
    },

    battingStyle: String,

    bowlingStyle: String,

    joinedDate: Date,

    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Player", playerSchema);