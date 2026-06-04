import { useState } from "react";
import { logMeal } from "../../api/nutritionApi";

function MealLogger() {

  const [meal, setMeal] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const userId =
    "test-user";

  const handleSubmit =
    async () => {

      if (!meal) return;

      try {

        setLoading(true);

        await logMeal(
          userId,
          meal
        );

        setMessage(
          "Meal logged successfully!"
        );

        setMeal("");

      } catch (error) {

        console.error(error);

        setMessage(
          "Failed to log meal"
        );

      } finally {

        setLoading(false);

      }
    };

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
        mb-4
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
        placeholder="2 masala dosa"
        className="
          w-full
          bg-black/30
          border
          border-white/10
          rounded-xl
          p-4
          mb-4
        "
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
          w-full
          bg-gradient-to-r
          from-green-500
          to-emerald-500
          py-3
          rounded-xl
          font-semibold
        "
      >
        {
          loading
            ? "Logging..."
            : "Log Meal"
        }
      </button>

      {message && (

        <p
          className="
          mt-4
          text-green-400
        "
        >
          {message}
        </p>

      )}

    </div>

  );
}

export default MealLogger;