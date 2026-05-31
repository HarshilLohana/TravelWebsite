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
app.use(helmet());
app.use(compression());

// ─── CORS ─────────────────────────────────────────────────────────────────────
// Allowed origins — localhost for dev, real domain for production
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://arabianamenitytravels.com",
  "https://www.arabianamenitytravels.com",
  process.env.FRONTEND_URL,
].filter(Boolean); // removes undefined if FRONTEND_URL is not set

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, curl)
      if (!origin) return callback(null, true);

      if (ALLOWED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      console.warn(`CORS blocked request from origin: ${origin}`);
      return callback(new Error(`CORS policy: origin ${origin} not allowed`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ─── Rate Limiter ──────────────────────────────────────────────────────────────
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, try again later" },
});
app.use("/api/", apiLimiter);

// ─── Stricter limiter for auth routes ─────────────────────────────────────────
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login attempts, try again later" },
});
app.use("/api/auth/", authLimiter);

/* ------------------ BODY PARSER ------------------ */
app.use(express.json({ limit: "10kb" }));

/* ------------------ ROUTES ------------------ */
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

/* ------------------ HEALTH CHECK ------------------ */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", env: process.env.NODE_ENV });
});

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
  console.log(`✅ Allowed CORS origins: ${ALLOWED_ORIGINS.join(", ")}`);
});