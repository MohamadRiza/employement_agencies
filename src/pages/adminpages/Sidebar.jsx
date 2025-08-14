import React from "react";
import { FaSignOutAlt, FaUserCog, FaClipboardList, FaEnvelope } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab, logout }) => {
  return (
    <div className="w-64 bg-white/20 backdrop-blur-md border-r border-white/30 p-6 flex flex-col text-white">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <FaUserCog /> Admin Panel
      </h2>
      <nav className="space-y-4 flex-1">
        <button
          onClick={() => setActiveTab("messages")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "messages"
              ? "bg-blue-600 text-white shadow-lg"
              : "hover:bg-white/20"
          }`}
        >
          <FaEnvelope />
          Messages
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "settings"
              ? "bg-green-600 text-white shadow-lg"
              : "hover:bg-white/20"
          }`}
        >
          <FaUserCog />
          Settings
        </button>

        <button
          onClick={() => setActiveTab("upload")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "upload"
              ? "bg-blue-600 text-white shadow-lg"
              : "hover:bg-white/20"
          }`}
        >
          <FaClipboardList />
          Upload Vacancies
        </button>
      </nav>

      <button
        onClick={logout}
        className="bg-black/70 mt-auto flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/80 transition text-red-100 hover:text-white"
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
