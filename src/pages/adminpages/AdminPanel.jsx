import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");
  if (!token) navigate("/admin-login");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API_URL}/api/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (res.ok) {
          setMessages(result.data);
        } else {
          console.error("Error:", result.message);
        }
      } catch (err) {
        console.error("Network error:", err);
      }
    };
    fetchMessages();
  }, [token]);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/admin/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(passwordForm),
    });
    const data = await res.json();
    setMsg(data.message);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 bg-opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">Admin Dashboard</h2>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Messages */}
        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-2xl mb-10 text-white">
          <h3 className="text-2xl font-semibold mb-4">Client Messages</h3>
          {messages.length === 0 ? (
            <p className="text-gray-300">No messages yet.</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg._id} className="border-b border-white/20 pb-3">
                  <p><strong>{msg.name}</strong> ({msg.email})</p>
                  <p className="italic">{msg.subject}</p>
                  <p className="mt-1">{msg.message}</p>
                  <small className="text-gray-400">
                    {new Date(msg.createdAt).toLocaleString()}
                  </small>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Change Password */}
        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-2xl text-white">
          <h3 className="text-2xl font-semibold mb-4">Change Password</h3>
          {msg && (
            <div className="bg-blue-500/30 text-blue-100 p-3 rounded mb-4 shadow-md">
              {msg}
            </div>
          )}
          <form onSubmit={handleChangePassword} className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
