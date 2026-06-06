// Pings the server every 14 minutes to prevent Render cold start
// Render free tier sleeps after 15 minutes of inactivity

const SERVER_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const PING_INTERVAL = 14 * 60 * 1000; // 14 minutes

export const startKeepAlive = () => {
  // Don't run in development
  if (import.meta.env.DEV) return;

  const ping = async () => {
    try {
      await fetch(`${SERVER_URL}/ping`);
      console.log("Server pinged successfully");
    } catch (error) {
      // Silent fail — not critical
    }
  };

  // Ping immediately on load
  ping();

  // Then ping every 14 minutes
  setInterval(ping, PING_INTERVAL);
};