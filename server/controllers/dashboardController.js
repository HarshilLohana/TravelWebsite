import Message from "../models/Message.js";

// ── USER — Get their own messages ──────────────────────────────────────────────
// Auth is guaranteed by authMiddleware in the route
export const getUserMessages = async (req, res) => {
  try {
    const email = req.user.email;

    const messages = await Message.find({ email })
      .sort({ createdAt: -1 });

    res.status(200).json({ messages });
  } catch (error) {
    console.error("User messages error:", error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};

// ── ADMIN — Get all pending messages ──────────────────────────────────────────
// Admin role is guaranteed by adminMiddleware in the route
// No need to check req.user.role here anymore
export const getAdminMessages = async (req, res) => {
  try {
    const messages = await Message.find({ status: "pending" })
      .sort({ createdAt: -1 });

    res.status(200).json({ messages });
  } catch (error) {
    console.error("Admin messages error:", error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};

// ── ADMIN — Reply to a message ─────────────────────────────────────────────────
// Admin role is guaranteed by adminMiddleware in the route
export const replyToMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    if (!reply || !reply.trim()) {
      return res.status(400).json({ error: "Reply cannot be empty" });
    }

    const message = await Message.findById(id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    message.reply = reply.trim();
    message.status = "answered";
    await message.save();

    res.status(200).json({ data: message });
  } catch (error) {
    console.error("Reply error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};