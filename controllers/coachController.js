import CoachLocation
from "../models/CoachLocation.js";
import { io } from "../server.js";
import User from "../models/user.js"

export const updateCoachLocation =
async (req, res) => {

  try {

    const {
      coachId,
      latitude,
      longitude,
    } = req.body;

    // update existing location
    const updated =
      await CoachLocation.findOneAndUpdate(

        { coachId },

        {
          latitude,
          longitude,
          updatedAt: new Date(),
        },

        {
          upsert: true,
          new: true,
        }
      );

      io.emit(
  "coachLocationUpdated",
  updated
);

    res.status(200).json({
      success: true,
      updated,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

export const getAllCoaches = async (req, res) => {
console.log('juuuu ')
  try {

    const coaches =
      await User.find({
        role: "coach",
      }).select("-password");
    console.log(coaches,'jio')
    res.status(200).json(coaches);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// ✅ FETCH GPS LOCATIONS
export const getAllCoachLocations =
async (req, res) => {

  try {

    const locations =
      await CoachLocation.find();

    res.status(200).json(locations);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};