import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, User, Lock } from "lucide-react";
import { API_BASE_URL } from "../config/api";
import { Helmet } from "react-helmet-async";


const Signup = () => {
  const navigate = useNavigate();

  // NEW: form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // NEW: API status
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // After successful signup → go to login
      navigate("/login");
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
  <title>Sign Up | Arabian Amenity Travels</title>
  <meta name="robots" content="noindex, nofollow" />
</Helmet>

    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-200 flex items-center justify-center p-6 relative overflow-hidden">

      {/* Floating Travel Icons */}
      <Compass className="absolute top-16 right-10 text-purple-500 opacity-20 animate-spin-slow" size={70} />
      <User className="absolute bottom-16 left-14 text-purple-400 opacity-25 animate-pulse" size={60} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/40"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700">Create Account</h2>
        <p className="text-center text-gray-500 mt-2">Start your travel experience</p>

        {/* NEW error display */}
        {error && <p className="text-red-600 text-center mt-3">{error}</p>}

        <form className="mt-8 space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name} // NEW
              onChange={(e) => setName(e.target.value)} // NEW
              className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              value={email} // NEW
              onChange={(e) => setEmail(e.target.value)} // NEW
              className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                value={password} // NEW
                onChange={(e) => setPassword(e.target.value)} // NEW
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
              <Lock className="absolute right-3 top-5 text-gray-400" size={20} />
            </div>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold shadow-md transition">
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already a user?{" "}
          <Link to="/login" className="text-purple-700 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
    </>
  );
};

export default Signup;
