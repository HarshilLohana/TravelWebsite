import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
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

export default mongoose.model("Message", messageSchema);
