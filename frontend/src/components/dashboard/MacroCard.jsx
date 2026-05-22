function MacroCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

      <div className="flex justify-between items-center">

        <p className="text-gray-400">
          {title}
        </p>

        <div
          className={`w-3 h-3 rounded-full ${color}`}
        />

      </div>

      <h3 className="text-3xl font-bold mt-4">
        {value}
      </h3>

    </div>
  );
}

export default MacroCard;