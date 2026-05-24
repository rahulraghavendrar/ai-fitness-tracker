function TypingIndicator() {
  return (
    <div className="flex gap-2 bg-white/10 w-fit px-5 py-4 rounded-3xl">

      <div className="w-2 h-2 bg-white rounded-full animate-bounce" />

      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{
          animationDelay: "0.2s",
        }}
      />

      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{
          animationDelay: "0.4s",
        }}
      />

    </div>
  );
}

export default TypingIndicator;