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

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return navigate("/login");

    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/dashboard/messages`,
          {
            headers: { Authorization: `Bearer ${token}`,
                'Cache-Control': 'no-cache', },
          }
        );

        setMessages(res.data.messages);
      } catch (err) {
        console.error("Error loading messages", err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <title>Dashboard | Arabian Amenity Travels</title>
    </Helmet>

    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 relative overflow-hidden px-6 py-12">
      {/* Floating Travel Icons */}
      <Compass className="absolute top-10 left-5 text-purple-400 opacity-20 animate-spin-slow" size={60} />
      <Plane className="absolute top-32 right-10 text-blue-300 opacity-30 animate-bounce-slow" size={50} />
      <MapPin className="absolute bottom-20 left-10 text-red-300 opacity-25 animate-pulse" size={50} />
      <Plane className="absolute bottom-32 right-20 text-green-300 opacity-20 animate-spin-slow" size={60} />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-10 text-purple-700"
      >
        Your Messages
      </motion.h1>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl p-6 w-full max-w-6xl border border-white/40">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-100 text-purple-800">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Message</th>
              <th className="p-4">Submitted On</th>
              <th className="p-4">Status</th>
              <th className="p-4">Reply</th>
            </tr>
          </thead>

          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No messages yet.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg._id} className="border-b hover:bg-purple-50 transition">
                  <td className="p-4">{msg.name}</td>
                  <td className="p-4">{msg.email}</td>
                  <td className="p-4 max-w-sm">{msg.message}</td>
                  <td className="p-4">{new Date(msg.createdAt).toLocaleString()}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${
                          msg.status === "answered"
                            ? "bg-green-200 text-green-700"
                            : "bg-red-200 text-red-700"
                        }
                      `}
                    >
                      {msg.status}
                    </span>
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
