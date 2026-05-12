import mongoose from "mongoose"

const exerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    jointArea: {
      type: String,
      required: true,
    },

    position: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    duration: {
      type: String,
    },

    reps: {
      type: String,
    },

    gifUrl: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Exercise", exerciseSchema)