import { useState } from "react";

import toast from "react-hot-toast";

import {
  logMeal,
} from "../../api/nutritionApi";

import {
  useNutrition,
} from "../../context/NutritionContext";

function MealLogger() {

  const {
    refreshNutrition,
    userId,
  } = useNutrition();

  const [
    meal,
    setMeal,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function handleSubmit() {

    if (!meal.trim()) {

      toast.error(
        "Enter a meal."
      );

      return;

    }

    try {

      setLoading(true);

      await logMeal(
        userId,
        meal
      );

      await refreshNutrition();

      toast.success(
        "Meal Logged Successfully!"
      );

      setMeal("");

    } catch (error) {

      console.error(error);

      toast.error(
        "Unable to log meal."
      );

    } finally {

      setLoading(false);

    }

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
        mb-5
      "
      >
        Log Meal
      </h2>

      <input
        value={meal}
        onChange={(e) =>
          setMeal(
            e.target.value
          )
        }
        placeholder="Example: 2 Masala Dosa"
        className="
          w-full
          p-4
          rounded-xl
          bg-black/30
          border
          border-white/10
          mb-5
        "
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
          w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-orange-500
          to-pink-500
          font-semibold
        "
      >

        {

          loading

            ? "Logging..."

            : "Log Meal"

        }

      </button>

    </div>

  );

}

export default MealLogger;