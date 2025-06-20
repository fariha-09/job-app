import React, { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import 'emoji-picker-element';
import { createPortal } from 'react-dom';

export default function WhatsAppChat() {
  const [messages, setMessages] = useState([
    { sender: "Aimen", text: "Hey there! How are you?", time: getCurrentTime() },
    { sender: "You", text: "I'm good, Aimen! What about you?", time: getCurrentTime() },
  ]);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "You", text: input, time: getCurrentTime() }]);
    setInput("");
  };

  const handleEmojiSelect = (emoji) => {
    setInput(input + emoji);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-100 p-2 sm:p-4">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-t-lg text-center text-xl font-bold">
        WhatsApp Chat with Aimen
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
            <div className={`p-2 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-green-500 text-white" : "bg-gray-200 text-black"}`}>
              <div>{msg.text}</div>
              <div className="text-xs text-right mt-1">{msg.time}</div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex p-2 bg-gray-200 rounded-b-lg items-center">
        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="text-xl px-2 text-gray-600">
          <FaSmile />
        </button>

        <input
          type="text"
          className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-green-500 text-white p-3 rounded-r-lg">
          <IoSend />
        </button>
      </div>

      {/* Emoji Picker (Overlay) */}
      {showEmojiPicker && createPortal(
        <emoji-picker style={{ position: 'absolute', bottom: '80px', left: '10px', zIndex: 50 }} onEmojiClick={(e) => handleEmojiSelect(e.detail.unicode)}></emoji-picker>,
        document.body
      )}
    </div>
  );
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
