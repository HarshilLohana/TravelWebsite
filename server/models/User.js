import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please provide a valid email address"
      ],
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// ─── Indexes ───────────────────────────────────────────────────────────────────

// Email is already unique: true above which creates an index automatically
// Adding explicit index for role — used when checking admin exists on startup
userSchema.index({ role: 1 });

/* ------------------ PASSWORD HASHING ------------------ */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

/* ------------------ PASSWORD COMPARE ------------------ */
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/* ------------------ HIDE PASSWORD IN JSON ------------------ */
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

/* ------------------ CREATE DEFAULT ADMIN ------------------ */
userSchema.statics.createDefaultAdmin = async function () {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error("❌ Cannot seed admin — ADMIN_EMAIL or ADMIN_PASSWORD missing from environment");
    return;
  }

  try {
    const adminExists = await this.findOne({ role: "admin" });

    if (!adminExists) {
      const admin = new this({
        name: "Super Admin",
        email: adminEmail,
        password: adminPassword,
        role: "admin",
      });

      await admin.save();
      console.log("🎯 Default Admin Created:", admin.email);
    } else {
      console.log("✅ Admin account already exists:", adminExists.email);
    }
  } catch (error) {
    console.error("❌ Admin creation failed:", error.message);
  }
};

export default mongoose.model("Users", userSchema);