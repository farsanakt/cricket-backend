import User from "../models/user.js"
import bcrypt from "bcryptjs"

// get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password")
    res.status(202).json(users)
  } catch (error) {
    console.log('error in fetching users', error)
    res.status(500).json({ message: error.message })
  }
}

// create user with default password
export const createUser = async (req, res) => {
  try {
    console.log('this is the create user body', req.body)
    const { name, email, phone, role, password } = req.body

    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(400).json({ message: "User with this email already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ name, email, phone, role, password: hashedPassword })

    res.status(201).json({ _id: user._id, name: user.name, email: user.email, role: user.role })
  } catch (error) {
    console.log('error in creating user', error)
    res.status(500).json({ message: error.message })
  }
}