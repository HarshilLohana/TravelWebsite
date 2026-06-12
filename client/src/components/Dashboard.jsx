import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Compass, Plane, MapPin } from "lucide-react";
import { API_BASE_URL } from "../config/api";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return navigate("/login");

    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/dashboard/messages`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
          },
        });

        setMessages(res.data.messages);
      } catch (err) {
        console.error("Error loading messages", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const StatusBadge = ({ status }) => (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
        status === "answered"
          ? "bg-green-100 text-green-700"
          : "bg-amber-100 text-amber-700"
      }`}
    >
      {status}
    </span>
  );

  const SkeletonRow = () => (
    <tr className="border-b border-gray-100 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <td key={i} className="p-4">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </td>
      ))}
    </tr>
  );

  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 animate-pulse space-y-3">
      <div className="h-4 bg-gray-200 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-4 bg-gray-200 rounded w-full" />
    </div>
  );

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Dashboard | Arabian Amenity Travels</title>
      </Helmet>

      <div className="flex flex-col items-center min-h-screen bg-gray-50 relative overflow-hidden px-4 md:px-6 pt-32 pb-16">

        <Compass className="hidden md:block absolute top-24 left-5 text-[#c9a84c] opacity-10" size={60} />
        <Plane className="hidden md:block absolute top-40 right-10 text-[#c9a84c] opacity-10" size={50} />
        <MapPin className="hidden md:block absolute bottom-20 left-10 text-[#c9a84c] opacity-10" size={50} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0d1a]">
            Your Messages
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9a84c]" />
          {user && (
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              Welcome back, <span className="font-semibold text-[#0a0d1a]">{user.name}</span>
            </p>
          )}
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
              <p className="font-semibold text-gray-600 mb-1">No messages yet</p>
              <p className="text-sm">Questions sent through our contact form will appear here.</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                  <StatusBadge status={msg.status} />
                </div>

                <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider mb-1">
                  Your Message
                </p>
                <p className="text-gray-800 mb-4">{msg.message}</p>

                <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider mb-1">
                  Reply
                </p>
                <p className={msg.reply ? "text-gray-700" : "text-gray-400 italic"}>
                  {msg.reply || "Awaiting reply..."}
                </p>
              </div>
            ))
          )}
        </div>

        {/* ── DESKTOP: Table layout ───────────────────────────── */}
        <div className="hidden md:block overflow-x-auto bg-white shadow-xl rounded-2xl w-full max-w-6xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0a0d1a] text-[#c9a84c]">
                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Name</th>
                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Email</th>
                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Message</th>
                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Submitted On</th>
                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Status</th>
                <th className="p-4 font-semibold text-sm uppercase tracking-wider">Reply</th>
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
                    <p className="font-semibold text-gray-600 mb-1">No messages yet</p>
                    <p className="text-sm">
                      Questions sent through our contact form will appear here.
                    </p>
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg._id} className="border-b border-gray-100 hover:bg-[#c9a84c]/5 transition">
                    <td className="p-4 font-medium text-gray-800">{msg.name}</td>
                    <td className="p-4 text-gray-600">{msg.email}</td>
                    <td className="p-4 max-w-sm text-gray-700">{msg.message}</td>
                    <td className="p-4 text-gray-500 text-sm">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                    <td className="p-4">
                      <StatusBadge status={msg.status} />
                    </td>
                    <td className="p-4 text-gray-700">{msg.reply ? msg.reply : "—"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}