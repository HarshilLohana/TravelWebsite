import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    message: { type: String, required: true },
    reply: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "answered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// ─── Indexes ───────────────────────────────────────────────────────────────────

// Used by getUserMessages — finds all messages by email
// Without this: full collection scan every time a user opens dashboard
messageSchema.index({ email: 1 });

// Used by getAdminMessages — finds all pending messages
// Without this: full collection scan every time admin opens dashboard
messageSchema.index({ status: 1 });

// Compound index — used when sorting messages by date for a specific email
// Covers both the filter AND the sort in one index
messageSchema.index({ email: 1, createdAt: -1 });

// Compound index — used when admin filters pending + sorts by date
messageSchema.index({ status: 1, createdAt: -1 });

export default mongoose.model("Message", messageSchema);