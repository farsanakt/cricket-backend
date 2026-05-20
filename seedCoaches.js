import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import User from "./models/user.js";

dotenv.config();

connectDB();

const seedCoaches = async () => {

  try {

    // delete old coaches
    await User.deleteMany({
      role: "coach",
    });

    const hashedPassword =
      await bcrypt.hash(
        "123456",
        10
      );

    await User.create([

      {
        name: "Coach Amal",

        email:
          "coach1@gmail.com",

        password:
          hashedPassword,

        role: "coach",
      },

      {
        name: "Coach Nihad",

        email:
          "coach2@gmail.com",

        password:
          hashedPassword,

        role: "coach",
      },

    ]);

    console.log(
      "✅ Coaches Created"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedCoaches();