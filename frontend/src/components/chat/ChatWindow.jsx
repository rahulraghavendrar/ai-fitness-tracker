import { useState } from "react";

import { motion } from "framer-motion";

import QuickActions from "./QuickActions";
import MessageBubble from "./MessageBubble";

function ChatWindow() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Welcome back Rahul 👋 What would you like to track today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const aiMessage = {
      sender: "ai",
      text: "Meal tracked successfully ✅",
    };

    setMessages([
      ...messages,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="bg-white/5 border border-white/10 rounded-[30px] p-6 h-[700px] flex flex-col backdrop-blur-xl shadow-2xl"
    >

      <div className="flex-1 overflow-y-auto pr-2">

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.text}
          />
        ))}

        <QuickActions />

      </div>

      <div className="flex gap-4 mt-6">

        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Track your meal..."
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-all"
        />

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          onClick={sendMessage}
          className="bg-white text-black px-8 rounded-2xl font-semibold hover:scale-105 transition-all"
        >
          Send
        </motion.button>

      </div>

    </motion.div>
  );
}

export default ChatWindow;