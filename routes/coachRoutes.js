import express from "express";

import {
  updateCoachLocation,
} from "../controllers/coachController.js";
import {
  getAllCoaches,
  getAllCoachLocations,logoutCoach,
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

export default router;