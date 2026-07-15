import express from "express";

import {
  updateCoachLocation,
} from "../controllers/coachController.js";
import {
  getAllCoaches,
  getAllCoachLocations,logoutCoach,createDailyReport,getCoachReports
} from "../controllers/coachController.js";


const router = express.Router();

router.post(
  "/location",
  updateCoachLocation
);
router.get("/all", getAllCoaches);

router.get(
  "/locations",
  getAllCoachLocations
);

router.post(
  "/logout",
  logoutCoach
);



router.post("/daily-report", createDailyReport);

router.get("/daily-report/:coachId", getCoachReports);

export default router;