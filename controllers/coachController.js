import CoachLocation
from "../models/CoachLocation.js";
import { io } from "../server.js";
import User from "../models/user.js"
import Coach from "../models/Coach.js";
import { getDistance }
from "geolib";

import CoachDailyReport from "../models/CoachDailyReport.js";

export const createDailyReport = async (req, res) => {
  try {
    const report = await CoachDailyReport.create({
      coach: req.body.coachId,
      // mood: req.body.mood,
      // energyLevel: req.body.energyLevel,
      sessionType: req.body.sessionType,
      playersCoached: req.body.playersCoached,
      highlights: req.body.highlights,
      challenges: req.body.challenges,
      notes: req.body.notes,
      submittedAt: req.body.submittedAt,
    });

    res.status(201).json(report);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to save report",
    });
  }
};

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

export const getCoachReports = async (req, res) => {
  try {
    const { coachId } = req.params;

    const reports = await CoachDailyReport.find({
      coach: coachId,
    })
      .sort({ submittedAt: -1 })
      .limit(10);

    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch reports",
    });
  }
};