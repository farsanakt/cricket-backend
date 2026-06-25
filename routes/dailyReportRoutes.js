import express from "express";

import {
  createDailyReport,getAllDailyWellnessReport
} from "../controllers/dailyReportController.js";

const router = express.Router();

router.post(
  "/create",
  createDailyReport
);

router.get('/dailywellnessrprt/:id',getAllDailyWellnessReport)

export default router;