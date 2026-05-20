import mongoose from "mongoose";

const coachLocationSchema =
  new mongoose.Schema({

    coachId: {
      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,
    },

    latitude: Number,

    longitude: Number,

    updatedAt: {
      type: Date,
      default: Date.now,
    },

  });

export default mongoose.model(
  "CoachLocation",
  coachLocationSchema
);