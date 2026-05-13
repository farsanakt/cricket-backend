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
    'http://localhost:5174',
    'https://player-pwa-app.vercel.app',
    
    
];

app.use(
  cors({
    origin: [  "http://localhost:5173","https://cricket-system-frontend.vercel.app","http://localhost:5174","https://player-pwa-app.vercel.app"],
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
import dailyReportRoutes from "./routes/dailyReportRoutes.js";
app.use("/api/auth", authRoutes)
app.use("/api/player", playerRoutes)
app.use("/api/report", reportRoutes)
app.use('/api/excercise',exercisesRoutes)
app.use("/api/daily-report", dailyReportRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})