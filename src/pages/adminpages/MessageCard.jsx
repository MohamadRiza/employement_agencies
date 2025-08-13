import React from "react";

const MessageCard = ({ msg }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-white shadow-lg border border-white/20">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">{msg.name}</h3>
        <span className="text-sm text-gray-300">
          {new Date(msg.createdAt).toLocaleString()}
        </span>
      </div>
      <p className="text-blue-200 text-sm mt-1">{msg.email}</p>
      <p className="italic text-gray-300 mt-2">{msg.subject}</p>
      <p className="mt-3 leading-relaxed">{msg.message}</p>
    </div>
  );
};

export default MessageCard;
