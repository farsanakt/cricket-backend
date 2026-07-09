import User from "../models/user.js"
import Team from "../models/Team.js"
import Injury from "../models/Injury.js"
import Player from "../models/Player.js"

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

    const players=await Player.find()

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

    if(injuryData){

      res.status(202).json(injuryData)

    }

  } catch (error) {
    
  }

}

export const allTeams=async(req,res)=>{

  

  try {

    const teams=await Team.find()

    console.log(teams,'temsss')

    if(teams){

      res.status(202).json(teams)

    }
    
  } catch (error) {
    
  }

}

export const updatePlayer = async (req, res) => {
  try {
    console.log('this is the update player body', req.body)
    const { id } = req.params

    const updatedPlayer = await Player.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updatedPlayer) {
      return res.status(404).json({ message: "Player not found" })
    }

    res.status(202).json(updatedPlayer)
  } catch (error) {
    console.log('error in updating player', error)
    res.status(500).json({ message: error.message })
  }
}