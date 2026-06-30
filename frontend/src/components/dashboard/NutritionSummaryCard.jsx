import {
  Flame,
  Beef,
  Wheat,
  Droplets,
} from "lucide-react";

import {
  useNutrition,
} from "../../context/NutritionContext";

function NutritionSummaryCard() {

  const {

    summary,

    loading,

  } = useNutrition();

  if (loading) {

    return (

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
      "
      >

        Loading Nutrition...

      </div>

    );

  }

  return (

    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      backdrop-blur-xl
    "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
      "
      >

        Today's Nutrition

      </h2>

      <div
        className="
        space-y-4
      "
      >

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Flame />

            Calories

          </div>

          <b>

            {summary?.calories ?? 0}

          </b>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Beef />

            Protein

          </div>

          <b>

            {summary?.protein ?? 0} g

          </b>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Wheat />

            Carbs

          </div>

          <b>

            {summary?.carbs ?? 0} g

          </b>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Droplets />

            Fat

          </div>

          <b>

            {summary?.fat ?? 0} g

          </b>

        </div>

        <hr className="border-white/10"/>

        <div className="flex justify-between">

          <span>

            Meals Logged

          </span>

          <b>

            {summary?.meal_count ?? 0}

          </b>

        </div>

      </div>

    </div>

  );

}

export default NutritionSummaryCard;