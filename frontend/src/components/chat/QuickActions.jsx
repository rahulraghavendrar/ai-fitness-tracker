const actions = [
  "🍳 Track Breakfast",
  "🍛 Track Lunch",
  "🍪 Track Snacks",
  "🍽 Track Dinner",
];

function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">

      {actions.map((action, index) => (
        <button
          key={index}
          className="bg-white/5 hover:bg-white/10 border border-white/10 transition-all p-5 rounded-2xl text-left"
        >
          {action}
        </button>
      ))}

    </div>
  );
}

export default QuickActions;