import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, User, Lock } from "lucide-react";
import { API_BASE_URL } from "../config/api";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        setError(data.message || data.error || "Signup failed");
        return;
      }

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

      <div className="min-h-screen bg-[#0a0d1a] flex items-center justify-center p-6 relative overflow-hidden">

        {/* Floating decorative icons — gold */}
        <Compass className="absolute top-16 right-10 text-[#c9a84c] opacity-15" size={70} />
        <User className="absolute bottom-16 left-14 text-[#c9a84c] opacity-15 animate-pulse" size={60} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex justify-center mb-6">
            <img
              src="/images/LogoNOBG.webp"
              alt="Arabian Amenity Travels"
              className="h-20 w-auto"
            />
          </Link>

          <h2 className="text-3xl font-bold text-center text-[#0a0d1a]">Create Account</h2>
          <p className="text-center text-gray-500 mt-2">Start your travel experience</p>

          {error && <p className="text-red-600 text-center mt-3">{error}</p>}

          <form className="mt-8 space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="text-gray-700 font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={2}
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:border-[#c9a84c] outline-none transition"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:border-[#c9a84c] outline-none transition"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:border-[#c9a84c] outline-none transition"
                />
                <Lock className="absolute right-3 top-5 text-gray-400" size={20} />
              </div>
              <p className="text-gray-400 text-xs mt-1">Minimum 6 characters</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c9a84c] hover:bg-[#b8963e] text-white py-3 rounded-xl font-semibold shadow-md transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already a user?{" "}
            <Link to="/login" className="text-[#c9a84c] font-semibold hover:underline">
              Login here
            </Link>
          </p>

          <p className="text-center mt-4">
            <Link to="/" className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors">
              ← Back to Home
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;