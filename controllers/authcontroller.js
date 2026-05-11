import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
    console.log(isMatch,'pooooo')

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
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