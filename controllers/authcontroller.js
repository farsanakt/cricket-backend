import User from "../models/user.js"
import Coach from "../models/Coach.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { io } from "../server.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  console.log('hi')

  try {
    const user = await User.findOne({ email })

    console.log(user,'poo')

    if (!user) {
      return res.status(400).json({ message: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
    }
   if (user.role === "coach") {

  await Coach.findOneAndUpdate(

    {
      userId: user._id,
    },

    {
      isOnline: true,

      lastSeen: new Date(),
    }
  );

  // fetch updated coach
  const coachData =
    await Coach.findOne({

      userId: user._id,

    });

  // realtime emit
  io.emit(
    "coachLocationUpdated",
    coachData
  );

}

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.json({
      token,
      role: user.role,
      email: user.email,
      id: user._id 
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}