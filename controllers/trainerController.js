import TrainingSession from "../models/trainingSessionModel.js"
import NftcEntry from "../models/nftcEntryModel.js"
import FitnessGrid from "../models/fitnessGridModel.js"

// ── SESSIONS ──
export const getAllSessions = async (req, res) => {
  try {
    const sessions = await TrainingSession.find().sort({ createdAt: -1 })
    res.status(202).json(sessions)
  } catch (error) {
    console.log('error in fetching sessions', error)
    res.status(500).json({ message: error.message })
  }
}

export const createSession = async (req, res) => {
  try {
    console.log('this is the create session body', req.body)
    const session = await TrainingSession.create(req.body)
    res.status(201).json(session)
  } catch (error) {
    console.log('error in creating session', error)
    res.status(500).json({ message: error.message })
  }
}

export const updateSession = async (req, res) => {
  try {
    const { id } = req.params
    const session = await TrainingSession.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!session) return res.status(404).json({ message: "Session not found" })
    res.status(202).json(session)
  } catch (error) {
    console.log('error in updating session', error)
    res.status(500).json({ message: error.message })
  }
}

export const deleteSession = async (req, res) => {
  try {
    const { id } = req.params
    const session = await TrainingSession.findByIdAndDelete(id)
    if (!session) return res.status(404).json({ message: "Session not found" })
    res.status(202).json({ message: "Session deleted", session })
  } catch (error) {
    console.log('error in deleting session', error)
    res.status(500).json({ message: error.message })
  }
}

// ── NFTC ──
export const getAllNftc = async (req, res) => {
  try {
    const entries = await NftcEntry.find().sort({ date: 1 })
    res.status(202).json(entries)
  } catch (error) {
    console.log('error in fetching nftc entries', error)
    res.status(500).json({ message: error.message })
  }
}

export const createNftc = async (req, res) => {
  try {
    console.log('this is the create nftc body', req.body)
    const entry = await NftcEntry.create(req.body)
    res.status(201).json(entry)
  } catch (error) {
    console.log('error in creating nftc entry', error)
    res.status(500).json({ message: error.message })
  }
}

export const updateNftc = async (req, res) => {
  try {
    const { id } = req.params
    const entry = await NftcEntry.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!entry) return res.status(404).json({ message: "Entry not found" })
    res.status(202).json(entry)
  } catch (error) {
    console.log('error in updating nftc entry', error)
    res.status(500).json({ message: error.message })
  }
}

export const deleteNftc = async (req, res) => {
  try {
    const { id } = req.params
    const entry = await NftcEntry.findByIdAndDelete(id)
    if (!entry) return res.status(404).json({ message: "Entry not found" })
    res.status(202).json({ message: "Entry deleted", entry })
  } catch (error) {
    console.log('error in deleting nftc entry', error)
    res.status(500).json({ message: error.message })
  }
}

// ── FITNESS GRID (upsert per player) ──
export const getFitnessGrid = async (req, res) => {
  try {
    const { playerId } = req.params
    const grid = await FitnessGrid.findOne({ player: playerId })
    res.status(202).json(grid || { player: playerId, grid: {} })
  } catch (error) {
    console.log('error in fetching fitness grid', error)
    res.status(500).json({ message: error.message })
  }
}

export const saveFitnessGrid = async (req, res) => {
  try {
    console.log('this is the fitness grid body', req.body)
    const { playerId } = req.params
    const grid = await FitnessGrid.findOneAndUpdate(
      { player: playerId },
      { grid: req.body.grid },
      { new: true, upsert: true }
    )
    res.status(202).json(grid)
  } catch (error) {
    console.log('error in saving fitness grid', error)
    res.status(500).json({ message: error.message })
  }
}