import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plane, Globe, MapPin, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../config/api";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
  <title>Login | Arabian Amenity Travels</title>
  <meta name="robots" content="noindex, nofollow" />
</Helmet>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-6 relative overflow-hidden">
      <Plane className="absolute top-10 left-10 text-blue-400 opacity-30 animate-pulse" size={60} />
      <Globe className="absolute bottom-20 right-12 text-blue-500 opacity-20 animate-spin-slow" size={70} />
      <MapPin className="absolute top-1/2 left-6 text-red-400 opacity-20" size={50} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/40"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Welcome Back</h2>
        <p className="text-center text-gray-500 mt-2">Login to continue your journey</p>

        {error && <p className="text-red-600 text-center mt-3">{error}</p>}

        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <Lock className="absolute right-3 top-5 text-gray-400" size={20} />
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Not a user yet?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
    </>
  );
};

export default Login;
