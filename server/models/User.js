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
      select: false // Hides password in queries by default
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

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
  try {
    const adminExists = await this.findOne({ role: "admin" });

    if (!adminExists) {
      const admin = new this({
        name: "Super Admin",
        email: process.env.ADMIN_EMAIL || "admin@gmail.com",
        password: process.env.ADMIN_PASSWORD || "Admin@123",
        role: "admin",
      });

      await admin.save();
      console.log("🎯 Default Admin Created:", admin.email);
    }
  } catch (error) {
    console.error("Admin creation failed:", error);
  }
};

export default mongoose.model("Users", userSchema);
