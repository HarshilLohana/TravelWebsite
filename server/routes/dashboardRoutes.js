import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { 
  getUserMessages, 
  getAdminMessages, 
  replyToMessage 
} from "../controllers/dashboardController.js";

const router = express.Router();

// USER — View personal messages
router.get("/messages", authMiddleware, getUserMessages);

// ADMIN — See all
router.get("/admin/messages", authMiddleware, getAdminMessages);

// ADMIN — Reply
router.patch("/reply/:id", authMiddleware, replyToMessage);

export default router;
