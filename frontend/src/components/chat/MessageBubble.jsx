function MessageBubble({
  sender,
  message,
}) {
  return (
    <div
      className={`mb-6 flex ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`max-w-[70%] p-5 rounded-3xl ${
          sender === "user"
            ? "bg-white text-black"
            : "bg-white/10 text-white"
        }`}
      >

        <p>{message}</p>

      </div>

    </div>
  );
}

export default MessageBubble;