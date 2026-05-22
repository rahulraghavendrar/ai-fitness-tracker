import MacroCard from "./MacroCard";

function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">

      <MacroCard
        title="Protein"
        value="72g"
        color="bg-green-500"
      />

      <MacroCard
        title="Carbs"
        value="130g"
        color="bg-blue-500"
      />

      <MacroCard
        title="Fats"
        value="40g"
        color="bg-yellow-500"
      />

    </div>
  );
}

export default StatsGrid;