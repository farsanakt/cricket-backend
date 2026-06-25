import dotenv from "dotenv";

import connectDB from "./config/db.js";

import User from "./models/user.js";
import Coach from "./models/Coach.js";

dotenv.config();

connectDB();

const seedCoachProfiles =
async () => {

  try {

    // remove old coach profiles
    await Coach.deleteMany();

    // find coach users
    const coach1 =
      await User.findOne({
        email: "coach1@gmail.com",
      });

    const coach2 =
      await User.findOne({
        email: "coach2@gmail.com",
      });

    if (!coach1 || !coach2) {

      console.log(
        "❌ Coach users not found"
      );

      process.exit();

    }

    // create coach profiles
    await Coach.create([

      {

        userId: coach1._id,

        name: "Coach Amal",

        academyName:
          "Calicut Cricket Academy",

        academyLatitude:
          11.258753,

        academyLongitude:
          75.780411,

        allowedRadius: 100,

      },

      {

        userId: coach2._id,

        name: "Coach Nihad",

        academyName:
          "Malappuram Cricket Ground",

        academyLatitude:
          11.0510,

        academyLongitude:
          76.0711,

        allowedRadius: 120,

      },

    ]);

    console.log(
      "✅ Coach profiles created"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedCoachProfiles();