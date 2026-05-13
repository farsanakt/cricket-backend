import express from "express";

import {
  createDailyReport,
} from "../controllers/dailyReportController.js";

const router = express.Router();

router.post(
  "/create",
  createDailyReport
);

export default router;