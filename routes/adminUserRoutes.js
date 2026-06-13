import express from "express";

import {
  createAdminUser,
  getAdminUsers,
  updateAdminUser,
  deleteAdminUser,
} from "../controllers/adminUserController.js";

const router =
  express.Router();

router.post(
  "/create",
  createAdminUser
);

router.get(
  "/all",
  getAdminUsers
);

router.put(
  "/:id",
  updateAdminUser
);

router.delete(
  "/:id",
  deleteAdminUser
);

export default router;