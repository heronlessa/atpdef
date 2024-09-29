import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/profile" /> : <Login />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;