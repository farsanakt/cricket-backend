import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const app = express()

const allowedOrigins = [
    'https://cricket-system-frontend.vercel.app',
    'http://localhost:5173',
    
    
];

app.use(
  cors({
    origin: [  "http://localhost:5173","https://cricket-system-frontend.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(express.json())



app.get("/", (req, res) => {
  res.send("API Running 🚀")
})

// Routes
import authRoutes from "./routes/authRoutes.js"
import playerRoutes from "./routes/playerRoutes.js"
import reportRoutes from "./routes/reportRoutes.js"
import exercisesRoutes from './routes/exercisesRoutes.js'
app.use("/api/auth", authRoutes)
app.use("/api/player", playerRoutes)
app.use("/api/report", reportRoutes)
app.use('/api/excercise',exercisesRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})