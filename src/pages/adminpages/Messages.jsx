import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import MessageCard from "./MessageCard";

const API_URL = import.meta.env.VITE_API_URL;

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("adminToken");

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

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Client Messages</h2>
      {messages.length === 0 ? (
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl text-center text-gray-300">
          <FaEnvelope className="text-6xl mx-auto mb-4 opacity-50" />
          <p>No messages yet.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {messages.map((msg) => (
            <MessageCard key={msg._id} msg={msg} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
