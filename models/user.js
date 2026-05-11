import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "trainer", "physio", "player", "nutrition"],
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  }
})

export default mongoose.model("User", userSchema)