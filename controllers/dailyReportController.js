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
      note,
      training,
    } = req.body;

    console.log(req.body,'kkoooppppe')

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
      note,
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


export const getAllDailyWellnessReport = async (req, res) => {

  // console.log('hetttte')

  try {

    // console.log(req.params.id, 'koooo')

    const dailyReport = await DailyReport.find({
      player: req.params.id
    })

    // console.log(dailyReport, 'this is theee')

    res.status(200).json({
      success: true,
      data: dailyReport
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}