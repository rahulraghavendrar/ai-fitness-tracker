const actions = [
  "🍳 Track Breakfast",
  "🍛 Track Lunch",
  "🍪 Track Snacks",
  "🍽 Track Dinner",
];

function QuickActions({
  onActionClick,
}) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">

      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() =>
            onActionClick(action)
          }
          className="bg-white/5 hover:bg-orange-500/20 border border-white/10 transition-all p-5 rounded-2xl text-left backdrop-blur-lg hover:scale-[1.02]"
        >
          {action}
        </button>
      ))}

    </div>
  );
}

export default QuickActions;