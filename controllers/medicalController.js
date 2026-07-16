import MedicalHistory from "../models/medicalHistoryModel.js"
import Medication from "../models/medicationModel.js"

// ── MEDICAL HISTORY ──
export const getAllMedicalHistories = async (req, res) => {
  try {
    const histories = await MedicalHistory.find().sort({ createdAt: -1 }).populate("recordedBy", "name")
    res.status(202).json(histories)
  } catch (error) {
    console.log('error in fetching medical histories', error)
    res.status(500).json({ message: error.message })
  }
}

export const createMedicalHistory = async (req, res) => {
  try {
    console.log('this is the create medical history body', req.body)
    const history = await MedicalHistory.create(req.body)
    res.status(201).json(history)
  } catch (error) {
    console.log('error in creating medical history', error)
    res.status(500).json({ message: error.message })
  }
}

export const updateMedicalHistory = async (req, res) => {
  try {
    console.log('this is the update medical history body', req.body)
    const { id } = req.params
    const history = await MedicalHistory.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!history) return res.status(404).json({ message: "Medical history not found" })
    res.status(202).json(history)
  } catch (error) {
    console.log('error in updating medical history', error)
    res.status(500).json({ message: error.message })
  }
}

export const deleteMedicalHistory = async (req, res) => {
  try {
    const { id } = req.params
    const history = await MedicalHistory.findByIdAndDelete(id)
    if (!history) return res.status(404).json({ message: "Medical history not found" })
    res.status(202).json({ message: "Medical history deleted", history })
  } catch (error) {
    console.log('error in deleting medical history', error)
    res.status(500).json({ message: error.message })
  }
}

// ── MEDICATIONS ──
export const getAllMedications = async (req, res) => {
  try {
    const medications = await Medication.find().sort({ createdAt: -1 }).populate("recordedBy", "name")
    res.status(202).json(medications)
  } catch (error) {
    console.log('error in fetching medications', error)
    res.status(500).json({ message: error.message })
  }
}

export const createMedication = async (req, res) => {
  try {
    console.log('this is the create medication body', req.body)
    const medication = await Medication.create(req.body)
    res.status(201).json(medication)
  } catch (error) {
    console.log('error in creating medication', error)
    res.status(500).json({ message: error.message })
  }
}

export const updateMedication = async (req, res) => {
  try {
    console.log('this is the update medication body', req.body)
    const { id } = req.params

    // locked medications cannot be edited
    const existing = await Medication.findById(id)
    if (!existing) return res.status(404).json({ message: "Medication not found" })
    if (existing.locked) return res.status(403).json({ message: "This medication record is locked and cannot be edited" })

    const medication = await Medication.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    res.status(202).json(medication)
  } catch (error) {
    console.log('error in updating medication', error)
    res.status(500).json({ message: error.message })
  }
}

export const deleteMedication = async (req, res) => {
  try {
    const { id } = req.params

    const existing = await Medication.findById(id)
    if (!existing) return res.status(404).json({ message: "Medication not found" })
    if (existing.locked) return res.status(403).json({ message: "This medication record is locked and cannot be deleted" })

    await Medication.findByIdAndDelete(id)
    res.status(202).json({ message: "Medication deleted", medication: existing })
  } catch (error) {
    console.log('error in deleting medication', error)
    res.status(500).json({ message: error.message })
  }
}