import {
  useState,
  useRef,
  useEffect,
} from "react";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import QuickActions from "./QuickActions";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

function ChatWindow() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Welcome back Rahul 👋 What would you like to track today?",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] =
    useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const fakeAIResponse = (message) => {

    setLoading(true);

    setTimeout(() => {

      const aiMessage = {
        sender: "ai",
        text: `Tracked successfully ✅ "${message}" added to your calories.`,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      setLoading(false);

      toast.success(
        "Meal tracked successfully!"
      );

    }, 1500);
  };

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    fakeAIResponse(input);

    setInput("");
  };

  const handleQuickAction = (
    action
  ) => {

    const userMessage = {
      sender: "user",
      text: action,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    fakeAIResponse(action);
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

        <QuickActions
          onActionClick={
            handleQuickAction
          }
        />

        {loading && (
          <TypingIndicator />
        )}

        <div ref={bottomRef} />

      </div>

      <div className="flex gap-4 mt-6">

        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Track your meal..."
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-all"
        />

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.03,
          }}
          onClick={sendMessage}
          className="bg-white text-black px-8 rounded-2xl font-semibold transition-all"
        >
          Send
        </motion.button>

      </div>

    </motion.div>
  );
}

export default ChatWindow;