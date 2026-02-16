import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

import Users from "./models/User.js";

dotenv.config();
connectDB();

const app = express();

/* ------------------ SECURITY ------------------ */

// Helmet first
app.use(helmet());

// GZIP compression
app.use(compression());

// CORS – secure for prod
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, try again later" },
});
app.use("/api/", apiLimiter);

/* ------------------ BODY PARSER ------------------ */
app.use(express.json({ limit: "10kb" }));

/* ------------------ ROUTES ------------------ */
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

/* ------------------ TEST ROUTE ------------------ */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ------------------ ADMIN SEED ------------------ */
if (process.env.NODE_ENV !== "production") {
  (async () => {
    try {
      await Users.createDefaultAdmin();
      console.log("Default admin checked");
    } catch (error) {
      console.error("Admin creation error:", error);
    }
  })();
}

/* ------------------ GLOBAL ERROR HANDLER ------------------ */
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

/* ------------------ SERVER ------------------ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
