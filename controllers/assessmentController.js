import Assessment from "../models/Assessment.js"

// get all assessments
export const getAllAssessments = async (req, res) => {
    console.log('kopppppeeee ')
  try {
    const assessments = await Assessment.find().sort({ createdAt: -1 })
    console.log('hoooop',assessments)
    res.status(202).json(assessments)
  } catch (error) {
    console.log('error in fetching all assessments', error)
    res.status(500).json({ message: error.message })
  }
}

// create assessment
export const createAssessment = async (req, res) => {
  try {
    console.log('this is the create assessment body', req.body)
    const assessment = await Assessment.create(req.body)
    res.status(201).json(assessment)
  } catch (error) {
    console.log('error in creating assessment', error)
    res.status(500).json({ message: error.message })
  }
}

// update assessment
export const updateAssessment = async (req, res) => {
  try {
    console.log('this is the update assessment body', req.body)
    const { id } = req.params
    const assessment = await Assessment.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found" })
    }

    res.status(202).json(assessment)
  } catch (error) {
    console.log('error in updating assessment', error)
    res.status(500).json({ message: error.message })
  }
}

// delete assessment
export const deleteAssessment = async (req, res) => {
    console.log('kooo')
  try {
    const { id } = req.params
    const assessment = await Assessment.findByIdAndDelete(id)

    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found" })
    }

    res.status(202).json({ message: "Assessment deleted", assessment })
  } catch (error) {
    console.log('error in deleting assessment', error)
    res.status(500).json({ message: error.message })
  }
}