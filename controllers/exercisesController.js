import Exercise from "../models/Exercise.js";

export const fetchExistingWrks = async (req, res) => {
  console.log("I am reached");

  try {
    const workouts = await Exercise.find();

    // console.log(workouts, "this is the data");

    // ✅ SEND DATA TO FRONTEND
    res.status(200).json({
      success: true,
      count: workouts.length,
      workouts,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch workouts",
      error: error.message,
    });
  }
};