import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import Settings from "./Settings";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  if (!token) navigate("/admin-login");

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} logout={logout} />

        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === "messages" && <Messages />}
          {activeTab === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
