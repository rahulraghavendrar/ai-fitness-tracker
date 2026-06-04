import useNutritionSummary from "../../hooks/useNutritionSummary";

function NutritionSummaryCard() {

  const {
    summary,
    loading,
  } = useNutritionSummary();

  if (loading) {
    return (
      <div className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
      ">
        Loading Nutrition...
      </div>
    );
  }

  return (

    <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      backdrop-blur-xl
    ">

      <h2 className="
        text-xl
        font-bold
        mb-6
      ">
        Today's Nutrition
      </h2>

      <div className="
        grid
        grid-cols-2
        gap-4
      ">

        <div>
          <p className="text-gray-400">
            Calories
          </p>

          <h3 className="
            text-3xl
            font-bold
          ">
            {summary?.calories ?? 0}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">
            Meals
          </p>

          <h3 className="
            text-3xl
            font-bold
          ">
            {summary?.meal_count ?? 0}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">
            Protein
          </p>

          <h3 className="
            text-green-400
            text-2xl
            font-bold
          ">
            {summary?.protein ?? 0}g
          </h3>
        </div>

        <div>
          <p className="text-gray-400">
            Carbs
          </p>

          <h3 className="
            text-yellow-400
            text-2xl
            font-bold
          ">
            {summary?.carbs ?? 0}g
          </h3>
        </div>

        <div>
          <p className="text-gray-400">
            Fat
          </p>

          <h3 className="
            text-red-400
            text-2xl
            font-bold
          ">
            {summary?.fat ?? 0}g
          </h3>
        </div>

      </div>

    </div>
  );
}

export default NutritionSummaryCard;