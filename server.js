import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import { createServer } from "http";
import { Server } from "socket.io";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import exercisesRoutes from "./routes/exercisesRoutes.js";
import dailyReportRoutes from "./routes/dailyReportRoutes.js";
import coachRoutes from "./routes/coachRoutes.js";

dotenv.config();

connectDB();

const app = express();


// ✅ ALLOWED FRONTENDS
const allowedOrigins = [

  "http://localhost:5173",

  "http://localhost:5174",

  "https://cricket-system-frontend.vercel.app",

  "https://player-pwa-app.vercel.app",

  "https://coach-pwa-app.vercel.app",

  "http://168.144.149.133",
];


// ✅ CORS
app.use(
  cors({

    origin: allowedOrigins,

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],

  })
);


// ✅ BODY PARSER
app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);


// ✅ TEST ROUTE
app.get("/", (req, res) => {

  res.send("API Running 🚀");

});


// ✅ API ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/player", playerRoutes);

app.use("/api/report", reportRoutes);

app.use("/api/excercise", exercisesRoutes);

app.use(
  "/api/daily-report",
  dailyReportRoutes
);

app.use("/api/coach", coachRoutes);


// ✅ CREATE HTTP SERVER
const httpServer =
  createServer(app);


// ✅ SOCKET SERVER
export const io =
  new Server(httpServer, {

    cors: {

      origin: allowedOrigins,

      methods: [
        "GET",
        "POST",
      ],

      credentials: true,

    },

  });


// ✅ SOCKET CONNECTION
io.on("connection", (socket) => {

  console.log(
    "🟢 Socket Connected:",
    socket.id
  );

  socket.on("disconnect", () => {

    console.log(
      "🔴 Socket Disconnected:",
      socket.id
    );

  });

});


// ✅ START SERVER
const PORT =
  process.env.PORT || 5000;

httpServer.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});