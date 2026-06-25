import mongoose from "mongoose"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"

import User from "./models/user.js"
import Team from "./models/Team.js"
import Injury from "./models/Injury.js"

dotenv.config()

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected")

    // 🔥 Clear old data (optional)
    await User.deleteMany()
    await Team.deleteMany()
    await Injury.deleteMany()

    // 🔐 Password
    const hashedPassword = await bcrypt.hash("1234", 10)

    // 👨‍⚕️ STAFF USERS
    const physio = await User.create({
      name: "Dr. Arun",
      email: "physio@gmail.com",
      password: hashedPassword,
      role: "physio"
    })

    const trainer = await User.create({
      name: "Rahul",
      email: "trainer@gmail.com",
      password: hashedPassword,
      role: "trainer"
    })

    const nutrition = await User.create({
      name: "Anjali",
      email: "nutrition@gmail.com",
      password: hashedPassword,
      role: "nutrition"
    })

    // 🧑‍🤝‍🧑 PLAYERS
    const player1 = await User.create({
      name: "Akhil",
      email: "player1@gmail.com",
      password: hashedPassword,
      role: "player"
    })

    const player2 = await User.create({
      name: "Nithin",
      email: "player2@gmail.com",
      password: hashedPassword,
      role: "player"
    })

    const player3 = await User.create({
      name: "Rahul P",
      email: "player3@gmail.com",
      password: hashedPassword,
      role: "player"
    })

    // 🏏 TEAM
    const team = await Team.create({
      name: "Kerala Cricket Academy",
      coach: "Suresh",
      physio: physio._id,
      trainer: trainer._id,
      nutritionist: nutrition._id,
      players: [player1._id, player2._id, player3._id]
    })

    // 🔗 Assign team to players
    player1.team = team._id
    player2.team = team._id
    player3.team = team._id

    await player1.save()
    await player2.save()
    await player3.save()

    // 🚑 INJURIES
    await Injury.create([
      {
        player: player1._id,
        description: "Knee injury",
        status: "active"
      },
      {
        player: player2._id,
        description: "Shoulder strain",
        status: "active"
      }
    ])

    console.log("✅ 3 Players + Team + Staff + Injuries created")
    process.exit()

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seedData()