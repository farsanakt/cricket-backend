import RehabProgram from "../models/RehabProgram.js"

export const createRehabProgram = async (req, res) => {

  console.log('i am reached in createRehabProgram controller')

  try {

    const { player, name, notes, goals, sessions, assignment, assignedBy } = req.body

    if (!player) {
      return res.status(400).json({ message: "player is required" })
    }

    if (!sessions || !Array.isArray(sessions) || sessions.length === 0) {
      return res.status(400).json({ message: "At least one session is required" })
    }

    const program = await RehabProgram.create({
      player,
      assignedBy,
      name,
      notes,
      goals,
      sessions,
      assignment,
    })

    res.status(201).json(program)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

export const getRehabProgramsByPlayer = async (req, res) => {

  console.log(req.params.playerId, 'getRehabProgramsByPlayer')

  try {

    const programs = await RehabProgram.find({ player: req.params.playerId }).sort({ createdAt: -1 })

    res.status(202).json(programs)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

export const getRehabProgramById = async (req, res) => {

  try {

    const program = await RehabProgram.findById(req.params.id)

    if (!program) {
      return res.status(404).json({ message: "Program not found" })
    }

    res.status(202).json(program)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

export const updateRehabProgram = async (req, res) => {

  console.log(req.params.id, 'updateRehabProgram')

  try {

    const { name, notes, goals, sessions, assignment, status } = req.body

    const update = {}
    if (name !== undefined) update.name = name
    if (notes !== undefined) update.notes = notes
    if (goals !== undefined) update.goals = goals
    if (sessions !== undefined) update.sessions = sessions
    if (assignment !== undefined) update.assignment = assignment
    if (status !== undefined) update.status = status

    const program = await RehabProgram.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    })

    if (!program) {
      return res.status(404).json({ message: "Program not found" })
    }

    res.status(202).json(program)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

export const deleteRehabProgram = async (req, res) => {

  console.log(req.params.id, 'deleteRehabProgram')

  try {

    const program = await RehabProgram.findByIdAndDelete(req.params.id)

    if (!program) {
      return res.status(404).json({ message: "Program not found" })
    }

    res.status(202).json({ message: "Program deleted" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

export const addRehabSession = async (req, res) => {

  try {

    const { name, notes, exercises } = req.body

    const program = await RehabProgram.findById(req.params.id)

    if (!program) {
      return res.status(404).json({ message: "Program not found" })
    }

    program.sessions.push({
      name: name || `Session ${program.sessions.length + 1}`,
      notes: notes || "",
      exercises: exercises || [],
    })

    await program.save()

    res.status(202).json(program)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

export const updateRehabSession = async (req, res) => {

  try {

    const { id, sessionId } = req.params
    const { name, notes, exercises } = req.body

    const program = await RehabProgram.findById(id)

    if (!program) {
      return res.status(404).json({ message: "Program not found" })
    }

    const session = program.sessions.id(sessionId)

    if (!session) {
      return res.status(404).json({ message: "Session not found" })
    }

    if (name !== undefined) session.name = name
    if (notes !== undefined) session.notes = notes
    if (exercises !== undefined) session.exercises = exercises

    await program.save()

    res.status(202).json(program)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

export const deleteRehabSession = async (req, res) => {

  try {

    const { id, sessionId } = req.params

    const program = await RehabProgram.findById(id)

    if (!program) {
      return res.status(404).json({ message: "Program not found" })
    }

    if (program.sessions.length <= 1) {
      return res.status(400).json({ message: "A program must have at least one session" })
    }

    program.sessions = program.sessions.filter((s) => String(s._id) !== String(sessionId))

    await program.save()

    res.status(202).json(program)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}