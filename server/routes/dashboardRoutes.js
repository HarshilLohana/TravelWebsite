import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/roleMiddleware.js";
import {
  getUserMessages,
  getAdminMessages,
  replyToMessage,
} from "../controllers/dashboardController.js";

const router = express.Router();

// ── USER — requires login only ─────────────────────────────────────────────────
router.get("/messages", authMiddleware, getUserMessages);

// ── ADMIN — requires login + admin role ───────────────────────────────────────
// adminMiddleware runs BEFORE the controller
// If user is not admin, request is blocked here — never reaches controller
router.get("/admin/messages", authMiddleware, adminMiddleware, getAdminMessages);
router.patch("/reply/:id", authMiddleware, adminMiddleware, replyToMessage);

export default router;