import User from "../models/user.js"
import Team from "../models/Team.js"
import Injury from "../models/Injury.js"

export const getPlayerDashboard = async (req, res) => {

    console.log(req.params.id,'koooo')
  try {
    const player = await User.findById(req.params.id)
      .populate({
        path: "team",
        populate: [
          { path: "physio", select: "name role" },
          { path: "trainer", select: "name role" },
          { path: "nutritionist", select: "name role" },

          // 🔥 ADD THIS
          {
            path: "players",
            select: "name role email"
          }
        ]
      })

    if (!player) {
      return res.status(404).json({ message: "Player not found" })
    }

    // 🔥 GET INJURIES
    const injuries = await Injury.find({ player: player._id })

    res.json({
      ...player.toObject(),
      injuries
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}