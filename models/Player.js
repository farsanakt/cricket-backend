import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
      default:'1234'
      
    },
   gender: {
    type: String,
    enum: ["Male", "Female","female","male"]
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

playerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("Player", playerSchema);