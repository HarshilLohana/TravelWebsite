import express from "express";
import { submitMessage } from "../controllers/contactController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// For logged-in + guest users → guest does NOT send token
router.post("/", submitMessage);

export default router;
