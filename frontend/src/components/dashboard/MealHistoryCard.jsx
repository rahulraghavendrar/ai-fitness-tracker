import {
  Clock3,
  Flame,
  Beef,
  Wheat,
  Droplets,
} from "lucide-react";

import {
  useNutrition,
} from "../../context/NutritionContext";

function formatTime(timestamp) {

  const date = new Date(timestamp);

  return date.toLocaleTimeString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

}

function MealHistoryCard() {

  const {

    todayMeals,

    loading,

  } = useNutrition();

  if (loading) {

    return (

      <div className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
      ">

        Loading Meals...

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
      h-[500px]
      overflow-y-auto
    "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
      "
      >

        Today's Meals

      </h2>

      {

        todayMeals.length === 0 && (

          <div
            className="
            text-center
            text-gray-400
            mt-20
          "
          >

            No meals logged today.

          </div>

        )

      }

      {

        todayMeals.map(

          (meal, index) => (

            <div

              key={index}

              className="
                bg-black/20
                rounded-2xl
                p-5
                mb-4
                border
                border-white/5
              "

            >

              <div
                className="
                flex
                justify-between
                items-center
                mb-4
              "
              >

                <h3
                  className="
                  text-xl
                  font-semibold
                "
                >

                  {meal.food_name}

                </h3>

                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  text-sm
                "
                >

                  <Clock3 size={16} />

                  {

                    formatTime(
                      meal.created_at
                    )

                  }

                </div>

              </div>

              <p
                className="
                text-gray-400
                mb-5
              "
              >

                Quantity :
                {" "}
                {meal.quantity}

              </p>

              <div
                className="
                grid
                grid-cols-2
                gap-4
              "
              >

                <div className="flex items-center gap-2">

                  <Flame
                    size={18}
                    className="text-orange-400"
                  />

                  {meal.calories} kcal

                </div>

                <div className="flex items-center gap-2">

                  <Beef
                    size={18}
                    className="text-red-400"
                  />

                  {meal.protein} g

                </div>

                <div className="flex items-center gap-2">

                  <Wheat
                    size={18}
                    className="text-yellow-400"
                  />

                  {meal.carbs} g

                </div>

                <div className="flex items-center gap-2">

                  <Droplets
                    size={18}
                    className="text-blue-400"
                  />

                  {meal.fat} g

                </div>

              </div>

            </div>

          )

        )

      }

    </div>

  );

}

export default MealHistoryCard;