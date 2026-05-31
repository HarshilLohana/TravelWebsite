import "./env.js";
import mongoose from "mongoose";

const REQUIRED_ENV_VARS = ["MONGO_URI", "JWT_SECRET", "ADMIN_EMAIL", "ADMIN_PASSWORD"];

for (const key of REQUIRED_ENV_VARS) {
  if (!process.env[key] || process.env[key].includes("REPLACE_WITH")) {
    console.error(
      `\n❌  FATAL: Missing or placeholder environment variable: ${key}\n` +
      `    Fill in real values in server/.env\n`
    );
    process.exit(1);
  }
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true,
    });
    console.log(`🍃 MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;