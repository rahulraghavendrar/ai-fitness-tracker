import { motion } from "framer-motion";

function MessageBubble({
  sender,
  message,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`mb-6 flex ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`max-w-[70%] p-5 rounded-3xl shadow-lg ${
          sender === "user"
            ? "bg-white text-black"
            : "bg-white/10 text-white border border-white/10"
        }`}
      >

        <p className="leading-relaxed">
          {message}
        </p>

      </div>

    </motion.div>
  );
}

export default MessageBubble;