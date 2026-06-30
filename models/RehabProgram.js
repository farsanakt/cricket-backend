import mongoose from "mongoose"

const { Schema } = mongoose

const SessionExerciseSchema = new Schema({
  exercise: { type: Schema.Types.ObjectId, ref: "Workout" },
  name: { type: String, required: true },
  category: String,
  jointArea: String,
  position: String,
  difficulty: String,
  gifUrl: String,
  description: String,
  sets: { type: Number, default: 3 },
  reps: { type: Number, default: 10 },
  rest: { type: Number, default: 60 },
  notes: { type: String, default: "" },
})

const SessionSchema = new Schema(
  {
    name: { type: String, default: "Session 1" },
    notes: { type: String, default: "" },
    exercises: { type: [SessionExerciseSchema], default: [] },
  },
  { timestamps: true }
)

const AssignmentSchema = new Schema(
  {
    startDate: { type: String },
    endDate: { type: String, default: "" },
    freq: { type: String, enum: ["specific", "daily", "alternate"], default: "specific" },
    days: { type: [String], default: [] },
    pain: { type: Boolean, default: true },
    rpe: { type: Boolean, default: true },
    notif: { type: Boolean, default: true },
    recording: { type: String, enum: ["Optional", "Required", "Disabled"], default: "Optional" },
  },
  { _id: false }
)

const RehabProgramSchema = new Schema(
  {
    player: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignedBy: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true, default: "Rehab Program" },
    notes: { type: String, default: "" },
    goals: { type: String, default: "" },
    sessions: { type: [SessionSchema], default: [] },
    assignment: { type: AssignmentSchema, default: () => ({}) },
    status: { type: String, enum: ["active", "completed", "archived"], default: "active" },
  },
  { timestamps: true }
)

export default mongoose.model("RehabProgram", RehabProgramSchema)