import User from "../models/user.js"
import Team from "../models/Team.js"
import Injury from "../models/Injury.js"
import Player from "../models/Player.js"






import bcrypt from "bcryptjs"; // or bcrypt
import jwt from "jsonwebtoken"

export const loginPlayer = async (req, res) => {
  console.log('njnnn ann')
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const player = await Player.findOne({ email }).populate("team");

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Player not found",
      });
    }

    const isMatch = await bcrypt.compare(password, player.password);
    console.log(isMatch)

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }


// inside loginPlayer, replace the final return with:
const token = jwt.sign(
  { id: player._id, role: "player" },
  process.env.JWT_SECRET || "secret123",
  { expiresIn: "7d" }
)

return res.status(200).json({
  success: true,
  message: "Login successful",
  token,
  role: "player",
  id: player._id,
  player: {
    id: player._id,
    name: player.name,
    email: player.email,
    gender: player.gender,
    number: player.number,
    age: player.age,
    team: player.team,
  },
});
  } catch (error) {
    console.error("Player Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};




// delete player and remove from team's players array
export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params

    const player = await Player.findByIdAndDelete(id)

    if (!player) {
      return res.status(404).json({ message: "Player not found" })
    }

    // remove player id from team's players array
    if (player.team) {
      await Team.findByIdAndUpdate(player.team, { $pull: { players: player._id } })
    }

    // remove assessments of this player
    await Assessment.deleteMany({ player: id })

    res.status(202).json({ message: "Player removed", player })
  } catch (error) {
    console.log('error in deleting player', error)
    res.status(500).json({ message: error.message })
  }
}

export const getPlayerDashboard = async (req, res) => {

    console.log(req.params.id,'koooo')
  try {
    const player = await Player.findById(req.params.id)
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

    console.log(player,'jopppee')
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