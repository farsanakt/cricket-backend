import Team from "../models/Team.js"
import Player from "../models/Player.js"

// create team with players
export const createTeam = async (req, res) => {
  try {
    console.log('this is the create team body', req.body)
    const { name, category,coach, physio, trainer, nutritionist, newPlayers } = req.body

    const team = await Team.create({ name, category,coach, physio, trainer, nutritionist })

    // create players and attach to team
    if (newPlayers && newPlayers.length > 0) {
      const playerDocs = await Player.insertMany(
        newPlayers.map((playerName) => ({ name: playerName, team: team._id }))
      )
      team.players = playerDocs.map((p) => p._id)
      await team.save()
    }

    res.status(201).json(team)
  } catch (error) {
    console.log('error in creating team', error)
    res.status(500).json({ message: error.message })
  }
}

// update team, add new players if any
export const updateTeam = async (req, res) => {
  try {
    console.log('this is the update team body', req.body)
    const { id } = req.params
    const { name, coach, physio, trainer, nutritionist, newPlayers } = req.body

    const team = await Team.findByIdAndUpdate(
      id,
      { name,category, coach, physio, trainer, nutritionist },
      { new: true, runValidators: true }
    )

    if (!team) {
      return res.status(404).json({ message: "Team not found" })
    }

    if (newPlayers && newPlayers.length > 0) {
      const playerDocs = await Player.insertMany(
        newPlayers.map((playerName) => ({ name: playerName, team: team._id }))
      )
      team.players.push(...playerDocs.map((p) => p._id))
      await team.save()
    }

    res.status(202).json(team)
  } catch (error) {
    console.log('error in updating team', error)
    res.status(500).json({ message: error.message })
  }
}

// delete team and its players
export const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params

    const team = await Team.findByIdAndDelete(id)

    if (!team) {
      return res.status(404).json({ message: "Team not found" })
    }

    // remove players under this team
    await Player.deleteMany({ team: id })

    res.status(202).json({ message: "Team deleted", team })
  } catch (error) {
    console.log('error in deleting team', error)
    res.status(500).json({ message: error.message })
  }
}