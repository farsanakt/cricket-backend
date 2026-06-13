import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    proficiency: {
      type: String,
      enum: [
        "Beginner",
        "Intermediate",
        "Advanced",
        "Professional",
      ],
      default: "Beginner",
    },

    role: {
      type: String,
      enum: [
        "admin",
        "coach",
        "trainer",
        "physio",
        "nutrition",
      ],
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "AdminUser",
  adminUserSchema
);