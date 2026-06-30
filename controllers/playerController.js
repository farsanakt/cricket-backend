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

          
          {
            path: "players",
            select: "name role email"
          }
        ]
      })

    if (!player) {
      return res.status(404).json({ message: "Player not found" })
    }

    
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

export const getAllPlayers=async(req,res)=>{

  console.log('i am reached in getallplayers controller')

  try {

    const players=await User.find({role:"player"})

    if (!players) {
      return res.status(404).json({ message: "Players not found" })
    }

    res.status(202).json(players)
    
  } catch (error) {
    
  }


}

export const getAllInjuryData=async (req,res)=>{

  console.log("i am reached in getallinjury controller")

  try {
    
    const injuryData=await Injury.find()

    if(Injury){

      res.status(202).json(injuryData)

    }

  } catch (error) {
    
  }

}