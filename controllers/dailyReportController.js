import DailyReport from "../models/DailyReport.js";

export const createDailyReport = async (req, res) => {
  try {
    const {
      player,
      name,
      urineColour,
      soreness,
      fatigue,
      sleep,
      injury,
      injuryFile,
      motivation,
      ballsBowled,
      rpe,
      training,
    } = req.body;

    const report = await DailyReport.create({
      player,
      name,
      urineColour,
      soreness,
      fatigue,
      sleep,
      injury,
      injuryFile,
      motivation,
      ballsBowled,
      rpe,
      training,
    });

    res.status(201).json({
      success: true,
      message: "Daily report submitted",
      report,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit report",
    });
  }
};