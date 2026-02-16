import Message from "../models/Message.js";

// USER — Get their own messages
export const getUserMessages = async (req, res) => {
  try {
    const email = req.user.email;

    const messages = await Message.find({ email })
      .sort({ createdAt: -1 });

    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
};


// ADMIN — Get all messages
export const getAdminMessages = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    // Only show pending messages
    const messages = await Message.find({ status: "pending" })
      .sort({ createdAt: -1 });

    res.status(200).json({ messages });
  } catch (error) {
    console.error("Admin messages error:", error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};


// ADMIN — Reply to message
export const replyToMessage = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const { id } = req.params;
    const { reply } = req.body;

    if (!reply) {
      return res.status(400).json({ error: "Reply cannot be empty" });
    }

    const message = await Message.findById(id);
    if (!message) return res.status(404).json({ error: "Message not found" });

    message.reply = reply;
    message.status = "answered";
    await message.save();

    res.status(200).json({ data: message });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
