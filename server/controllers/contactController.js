import Message from "../models/Message.js";

// ─── Sanitisation helpers ──────────────────────────────────────────────────────

// Strips HTML tags and dangerous characters from a string
// Prevents XSS payloads being stored in the database
const stripHTML = (str) => {
  return str
    .replace(/<[^>]*>/g, "")        // remove HTML tags
    .replace(/[<>'"]/g, "")         // remove remaining dangerous chars
    .trim();
};

// Validates email format
const isValidEmail = (email) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

// ─── Contact form submission ───────────────────────────────────────────────────
export const submitMessage = async (req, res) => {
  try {
    let { name, email, message } = req.body;

    // ── Step 1: Check all fields exist ──────────────────────────────────────
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // ── Step 2: Convert to strings and trim whitespace ───────────────────────
    name    = String(name).trim();
    email   = String(email).trim().toLowerCase();
    message = String(message).trim();

    // ── Step 3: Check fields are not empty after trimming ────────────────────
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Fields cannot be empty or whitespace only." });
    }

    // ── Step 4: Enforce length limits ────────────────────────────────────────
    if (name.length < 2) {
      return res.status(400).json({ error: "Name must be at least 2 characters." });
    }
    if (name.length > 100) {
      return res.status(400).json({ error: "Name must be under 100 characters." });
    }
    if (message.length < 10) {
      return res.status(400).json({ error: "Message must be at least 10 characters." });
    }
    if (message.length > 2000) {
      return res.status(400).json({ error: "Message must be under 2000 characters." });
    }

    // ── Step 5: Validate email format ────────────────────────────────────────
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    // ── Step 6: Sanitise — strip HTML and dangerous characters ───────────────
    name    = stripHTML(name);
    message = stripHTML(message);

    // ── Step 7: Save to database ─────────────────────────────────────────────
    const newMsg = await Message.create({
      name,
      email,
      message,
      user: req.user ? req.user._id : null,
    });

    res.status(201).json({
      message: "Message sent successfully",
      data: newMsg,
    });

  } catch (error) {
    console.error("Error submitting message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};