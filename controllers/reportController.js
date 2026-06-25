import Report from "../models/Report.js"

export const createReport = async (req, res) => {
  try {
    const report = await Report.create({
      ...req.body,
      player: req.user.id   // from token (later)
    })

    res.json(report)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}