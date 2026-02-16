import Message from "../models/Message.js";

export const submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMsg = await Message.create({
      name,
      email,
      message,
      user: req.user ? req.user._id : null, // only set if user is logged in
    });

    res.status(201).json({ message: "Message sent successfully", data: newMsg });
  } catch (error) {
    console.error("Error submitting message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
