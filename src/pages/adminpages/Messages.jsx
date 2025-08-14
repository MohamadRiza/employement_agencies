import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import MessageCard from "./MessageCard";

const API_URL = import.meta.env.VITE_API_URL;

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("adminToken");

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API_URL}/api/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (res.ok) setMessages(result.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();
  }, [token]);

  // Delete message function
  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await fetch(`${API_URL}/api/messages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        // Remove deleted message from state to update UI
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete message");
      }
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Network error while deleting message");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-white mb-6">Client Messages</h2>

      {messages.length === 0 ? (
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl text-center text-gray-300 flex-1 flex items-center justify-center">
          <FaEnvelope className="text-6xl mx-auto mb-4 opacity-50" />
          <p>No messages yet.</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-0.5 pr-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-900/20">
          {messages.map((msg) => (
            <MessageCard key={msg._id} msg={msg} onDelete={() => deleteMessage(msg._id)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
