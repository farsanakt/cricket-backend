import CoachLocation
from "../models/CoachLocation.js";
import { io } from "../server.js";
import User from "../models/user.js"
import Coach from "../models/Coach.js";
import { getDistance }
from "geolib";

export const updateCoachLocation =
async (req, res) => {

  try {

    const {

      coachId,

      latitude,

      longitude,

    } = req.body;

    // find coach
    const coach =
      await Coach.findOne({

        userId: coachId,

      });

    if (!coach) {

      return res.status(404).json({

        message: "Coach not found",

      });

    }

    // calculate distance
    const distance =
      getDistance(

        {

          latitude,

          longitude,

        },

        {

          latitude:
            coach.academyLatitude,

          longitude:
            coach.academyLongitude,

        }
      );

    // inside academy?
    const insideAcademy =
      distance <=
      coach.allowedRadius;

    // update coach
    coach.currentLatitude =
      latitude;

    coach.currentLongitude =
      longitude;

    coach.insideAcademy =
      insideAcademy;

    coach.lastSeen =
      new Date();

    coach.isOnline = true;

    await coach.save();

    // realtime update
    io.emit(
      "coachLocationUpdated",
      coach
    );

    res.status(200).json({

      success: true,

      insideAcademy,

      distance,

      coach,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: error.message,

    });

  }

};

export const getAllCoaches =
async (req, res) => {
  console.log('hiiiiiiiiiiiiiiiiiiiiiiikoooo')

  try {

    const coaches =
      await Coach.find()

      .populate(
        "userId",
        "email role"
      );

      console.log(
      coaches,
      "REAL COACH DATA"
    );


    res.status(200).json(
      coaches
    );

  } catch (error) {

    console.log(error);

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

export const logoutCoach =
async (req, res) => {

  try {

    const { coachId } = req.body;

    await Coach.findOneAndUpdate(

      {
        userId: coachId,
      },

      {
        isOnline: false,

        insideAcademy: false,
      }
    );

    res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

};