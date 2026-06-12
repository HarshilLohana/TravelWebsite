import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Compass, Plane, MapPin } from "lucide-react";
import { API_BASE_URL } from "../config/api";
import { Helmet } from "react-helmet-async";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || user.role !== "admin") return navigate("/login");

    async function fetchMessages() {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${API_BASE_URL}/api/dashboard/admin/messages`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Cache-Control": "no-cache",
            },
          }
        );

        setMessages(res.data.messages.filter((m) => m.status === "pending"));
      } catch (err) {
        console.error("Error loading messages", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, [navigate]);

  const handleReplyChange = (id, value) => {
    setMessages((prev) =>
      prev.map((msg) => (msg._id === id ? { ...msg, replyTemp: value } : msg))
    );
  };

  const handleReplySubmit = async (id) => {
    const message = messages.find((msg) => msg._id === id);
    if (!message.replyTemp) return;

    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        `${API_BASE_URL}/api/dashboard/reply/${id}`,
        { reply: message.replyTemp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("Error submitting reply", err);
    }
  };

  const SkeletonRow = () => (
    <tr className="border-b border-gray-100 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <td key={i} className="p-3 sm:p-4">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </td>
      ))}
    </tr>
  );

  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 animate-pulse space-y-3">
      <div className="h-4 bg-gray-200 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-10 bg-gray-200 rounded w-full" />
    </div>
  );

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Admin Dashboard | Arabian Amenity Travels</title>
      </Helmet>

      <div className="flex flex-col items-center min-h-screen bg-gray-50 relative overflow-hidden px-4 sm:px-6 md:px-10 pt-32 pb-16">

        <Compass className="hidden md:block absolute top-24 left-5 text-[#c9a84c] opacity-10" size={60} />
        <Plane className="hidden md:block absolute top-40 right-10 text-[#c9a84c] opacity-10" size={50} />
        <MapPin className="hidden md:block absolute bottom-20 left-10 text-[#c9a84c] opacity-10" size={50} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0d1a]">
            Admin Dashboard
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9a84c]" />
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            {loading
              ? "Loading messages..."
              : `${messages.length} pending ${messages.length === 1 ? "message" : "messages"}`}
          </p>
        </motion.div>

        {/* ── MOBILE: Card layout ─────────────────────────────── */}
        <div className="w-full max-w-lg space-y-4 md:hidden">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : messages.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center text-gray-500">
              <p className="font-semibold text-gray-600 mb-1">All caught up!</p>
              <p className="text-sm">No pending messages to reply to.</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-gray-800">{msg.name}</p>
                  <span className="text-xs text-gray-400">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-500 break-all mb-3">{msg.email}</p>

                <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider mb-1">
                  Message
                </p>
                <p className="text-gray-800 mb-4">{msg.message}</p>

                <input
                  type="text"
                  value={msg.replyTemp || ""}
                  placeholder="Type reply..."
                  onChange={(e) => handleReplyChange(msg._id, e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#c9a84c] focus:border-[#c9a84c] outline-none transition mb-3"
                />
                <button
                  onClick={() => handleReplySubmit(msg._id)}
                  className="w-full py-3 bg-[#c9a84c] text-white rounded-full font-semibold shadow hover:bg-[#b8963e] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!msg.replyTemp}
                >
                  Send Reply
                </button>
              </div>
            ))
          )}
        </div>

        {/* ── DESKTOP: Table layout ───────────────────────────── */}
        <div className="hidden md:block w-full max-w-7xl bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">

              <thead>
                <tr className="bg-[#0a0d1a] text-[#c9a84c] text-sm">
                  <th className="p-3 sm:p-4 font-semibold uppercase tracking-wider">User Name</th>
                  <th className="p-3 sm:p-4 font-semibold uppercase tracking-wider">Email</th>
                  <th className="p-3 sm:p-4 font-semibold uppercase tracking-wider">Message</th>
                  <th className="p-3 sm:p-4 font-semibold uppercase tracking-wider">Submitted On</th>
                  <th className="p-3 sm:p-4 font-semibold uppercase tracking-wider">Reply</th>
                  <th className="p-3 sm:p-4 font-semibold uppercase tracking-wider">Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
                ) : messages.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-10 text-center text-gray-500">
                      <p className="font-semibold text-gray-600 mb-1">All caught up!</p>
                      <p className="text-sm">No pending messages to reply to.</p>
                    </td>
                  </tr>
                ) : (
                  messages.map((msg) => (
                    <tr
                      key={msg._id}
                      className="border-b border-gray-100 hover:bg-[#c9a84c]/5 transition text-sm sm:text-base"
                    >
                      <td className="p-3 sm:p-4 whitespace-nowrap font-medium text-gray-800">
                        {msg.name}
                      </td>
                      <td className="p-3 sm:p-4 break-all text-gray-600">{msg.email}</td>
                      <td className="p-3 sm:p-4 max-w-xs break-words text-gray-700">
                        {msg.message}
                      </td>
                      <td className="p-3 sm:p-4 whitespace-nowrap text-gray-500 text-sm">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>

                      <td className="p-3 sm:p-4">
                        <input
                          type="text"
                          value={msg.replyTemp || ""}
                          placeholder="Type reply..."
                          onChange={(e) => handleReplyChange(msg._id, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#c9a84c] focus:border-[#c9a84c] outline-none transition"
                        />
                      </td>

                      <td className="p-3 sm:p-4">
                        <button
                          onClick={() => handleReplySubmit(msg._id)}
                          className="px-5 py-2 bg-[#c9a84c] text-white rounded-full font-semibold shadow hover:bg-[#b8963e] transition disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={!msg.replyTemp}
                        >
                          Send
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  );
}