// ProtectedRoute.jsx
// Guards routes that require authentication and/or a specific role.
// Usage:
//   <ProtectedRoute>               → requires login only
//   <ProtectedRoute role="admin">  → requires login + admin role

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  // Read user from localStorage
  const raw = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  // Not logged in at all — redirect to login
  if (!raw || !token) {
    return <Navigate to="/login" replace />;
  }

  let user = null;
  try {
    user = JSON.parse(raw);
  } catch {
    // Corrupted localStorage — clear and redirect
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  // Role check — if a specific role is required, verify it
  if (role && user.role !== role) {
    // Logged in but wrong role — redirect to home
    return <Navigate to="/" replace />;
  }

  // All checks passed — render the page
  return children;
}