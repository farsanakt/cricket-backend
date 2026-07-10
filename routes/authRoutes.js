import express from "express"
import { loginUser } from "../controllers/authcontroller.js"
import { createTeam, updateTeam, deleteTeam } from "../controllers/teamController.js"
import { getAllUsers, createUser } from "../controllers/userController.js"


const router = express.Router()

router.post("/login", loginUser)

// teams
router.post("/teams", createTeam)
router.put("/:id", updateTeam)
router.delete("/:id", deleteTeam)

// users
router.get("/users", getAllUsers)
router.post("/createusers", createUser)

export default router