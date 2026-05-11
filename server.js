import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API Running 🚀")
})

// Routes
import authRoutes from "./routes/authRoutes.js"
import playerRoutes from "./routes/playerRoutes.js"
import reportRoutes from "./routes/reportRoutes.js"
app.use("/api/auth", authRoutes)
app.use("/api/player", playerRoutes)
app.use("/api/report", reportRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})