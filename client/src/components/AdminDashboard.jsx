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

        // Only pending messages
        setMessages(res.data.messages.filter(m => m.status === "pending"));
      } catch (err) {
        console.error("Error loading messages", err);
      }
    }

    fetchMessages();
  }, []);

  const handleReplyChange = (id, value) => {
    setMessages(prev =>
      prev.map(msg =>
        msg._id === id ? { ...msg, replyTemp: value } : msg
      )
    );
  };

  const handleReplySubmit = async (id) => {
    const message = messages.find(msg => msg._id === id);
    if (!message.replyTemp) return;

    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `${API_BASE_URL}/api/dashboard/reply/${id}`,
        { reply: message.replyTemp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove from UI after replying (since now answered)
      setMessages(prev => prev.filter(msg => msg._id !== id));
    } catch (err) {
      console.error("Error submitting reply", err);
    }
  };
  


  return (
    <>
    <Helmet>
  <meta name="robots" content="noindex, nofollow" />
  <title>Admin Dashboard | Arabian Amenity Travels</title>
</Helmet>
    <div className="flex flex-col items-center min-h-screen bg-blue-200 relative overflow-hidden px-4 py-10 sm:px-6 md:px-10
      pt-24 sm:pt-32 lg:pt-40">

      <Compass className="hidden sm:block absolute top-10 left-5 text-purple-400 opacity-20 animate-spin-slow" size={60} />
      <Plane className="hidden sm:block absolute top-32 right-10 text-blue-300 opacity-30 animate-bounce-slow" size={50} />
      <MapPin className="hidden sm:block absolute bottom-20 left-10 text-red-300 opacity-25 animate-pulse" size={50} />
      <Plane className="hidden sm:block absolute bottom-32 right-20 text-green-300 opacity-20 animate-spin-slow" size={60} />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 text-purple-700"
      >
        Admin Dashboard
      </motion.h1>

      <div className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl border border-white/40 p-4 sm:p-6">

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">

            <thead>
              <tr className="bg-purple-100 text-purple-800 text-sm sm:text-base">
                <th className="p-3 sm:p-4">User Name</th>
                <th className="p-3 sm:p-4">Email</th>
                <th className="p-3 sm:p-4">Message</th>
                <th className="p-3 sm:p-4">Submitted On</th>
                <th className="p-3 sm:p-4">Reply</th>
                <th className="p-3 sm:p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-gray-500">
                    No pending messages.
                  </td>
                </tr>
              ) : (
                messages.map(msg => (
                  <tr key={msg._id} className="border-b hover:bg-purple-50 transition text-sm sm:text-base">

                    <td className="p-3 sm:p-4 whitespace-nowrap">{msg.name}</td>
                    <td className="p-3 sm:p-4 break-all">{msg.email}</td>
                    <td className="p-3 sm:p-4 max-w-xs break-words">{msg.message}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-3 sm:p-4">
                      <input
                        type="text"
                        value={msg.replyTemp || ""}
                        placeholder="Type reply..."
                        onChange={(e) => handleReplyChange(msg._id, e.target.value)}
                        className="w-full px-3 py-2 border rounded-md text-gray-800"
                      />
                    </td>

                    <td className="p-3 sm:p-4">
                      <button
                        onClick={() => handleReplySubmit(msg._id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition disabled:opacity-50"
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
