import Consultation from "../models/consultationModel.js"

// get all consultations
export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 })
    res.status(202).json(consultations)
  } catch (error) {
    console.log('error in fetching consultations', error)
    res.status(500).json({ message: error.message })
  }
}

// create consultation
export const createConsultation = async (req, res) => {
  try {
    console.log('this is the create consultation body', req.body)
    const consultation = await Consultation.create(req.body)
    res.status(201).json(consultation)
  } catch (error) {
    console.log('error in creating consultation', error)
    res.status(500).json({ message: error.message })
  }
}

// update consultation
export const updateConsultation = async (req, res) => {
  try {
    console.log('this is the update consultation body', req.body)
    const { id } = req.params
    const consultation = await Consultation.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!consultation) {
      return res.status(404).json({ message: "Consultation not found" })
    }

    res.status(202).json(consultation)
  } catch (error) {
    console.log('error in updating consultation', error)
    res.status(500).json({ message: error.message })
  }
}

// delete consultation
export const deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params
    const consultation = await Consultation.findByIdAndDelete(id)

    if (!consultation) {
      return res.status(404).json({ message: "Consultation not found" })
    }

    res.status(202).json({ message: "Consultation deleted", consultation })
  } catch (error) {
    console.log('error in deleting consultation', error)
    res.status(500).json({ message: error.message })
  }
}