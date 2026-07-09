import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import User from "./models/user.js";
import Team from "./models/Team.js";
import Player from "./models/Player.js";
import Injury from "./models/Injury.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // ===========================
    // CLEAR DATABASE
    // ===========================

    await User.deleteMany({});
    await Team.deleteMany({});
    await Player.deleteMany({});
    await Injury.deleteMany({});

    console.log("🗑 Old data deleted");

    // ===========================
    // HASH PASSWORD
    // ===========================

    const hashedPassword = await bcrypt.hash("1234", 10);

    // ===========================
    // STAFF USERS
    // ===========================

    const physio = await User.create({
      name: "Dr. Arun",
      email: "physio@gmail.com",
      password: hashedPassword,
      role: "physio",
    });

    const trainer = await User.create({
      name: "Rahul",
      email: "trainer@gmail.com",
      password: hashedPassword,
      role: "trainer",
    });

    const nutritionist = await User.create({
      name: "Anjali",
      email: "nutrition@gmail.com",
      password: hashedPassword,
      role: "nutrition",
    });

    console.log("✅ Staff Users Created");

    // ===========================
    // TEAM
    // ===========================

    const team = await Team.create({
      name: "KCA Senior Women's Academy",
      shortName: "KCA SWA",
      physio: physio._id,
      trainer: trainer._id,
      nutritionist: nutritionist._id,
      players: [],
    });

    console.log("✅ Team Created");

    // ===========================
    // PLAYER DATA
    // ===========================

    const playerData = [
      { name: "Alsa", email: "alsa@kca.com" },
      { name: "Devanandha", email: "devanandha@kca.com" },
      { name: "Goldin", email: "goldin@kca.com" },
      { name: "Jishna BK", email: "jishna@kca.com" },
      { name: "Vyga R", email: "vyga@kca.com" },
      { name: "Haya Fathima", email: "haya@kca.com" },
      { name: "Medha Deptha S", email: "medha@kca.com" },
      { name: "Nia Mariya Kuriakose", email: "nia@kca.com" },
      { name: "Parvathy Kunjumon", email: "parvathy@kca.com" },
      { name: "Pavithra", email: "pavithra@kca.com" },
      { name: "Sandra", email: "sandra@kca.com" },
      { name: "Theertha KR", email: "theertha@kca.com" },
      { name: "Vaiga Vijeesh", email: "vaiga@kca.com" },
    ];

    const players = [];

    for (const item of playerData) {
      const player = await Player.create({
        name: item.name,
        email: item.email,
        password: hashedPassword,
        team: team._id,
      });

      players.push(player);
    }

    // ===========================
    // UPDATE TEAM
    // ===========================

    team.players = players.map((player) => player._id);
    await team.save();

    console.log(`✅ ${players.length} Players Created`);

    // ===========================
    // SAMPLE INJURIES
    // ===========================

    await Injury.create([
      {
        player: players[0]._id,
        description: "Right Shoulder Pain",
        status: "active",
      },
      {
        player: players[4]._id,
        description: "Hamstring Strain",
        status: "active",
      },
    ]);

    console.log("✅ Sample Injuries Created");

    console.log("\n====================================");
    console.log("🎉 DATABASE SEEDED SUCCESSFULLY");
    console.log("====================================");
    console.log(`🏏 Team : ${team.name}`);
    console.log(`👥 Players : ${players.length}`);
    console.log(`🔐 Default Password : 1234`);
    console.log("====================================");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Error:", error);
    process.exit(1);
  }
};

seedData();