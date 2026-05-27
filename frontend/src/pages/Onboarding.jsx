import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import toast from "react-hot-toast";

import {
  useNavigate,
} from "react-router-dom";

import {
  supabase,
} from "../lib/supabase";

import {
  useAuth,
} from "../context/AuthContext";

import {
  calculateCalories,
} from "../utils/calorieCalculator";

function Onboarding() {

  const navigate = useNavigate();

  const { user } = useAuth();

  const [form, setForm] =
    useState({
      full_name: "",
      age: "",
      gender: "male",
      height: "",
      weight: "",
      body_fat: "",
      goal_weight: "",
      fitness_goal: "fat_loss",
    });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async () => {

      const results =
        calculateCalories({
          gender: form.gender,
          weight:
            Number(form.weight),
          height:
            Number(form.height),
          age: Number(form.age),
          goal:
            form.fitness_goal,
        });

      const {
        error,
      } =
        await supabase
          .from("profiles")
          .upsert({
            id: user.id,

            ...form,

            daily_calories:
              results.calories,

            protein_goal:
              results.protein,

            carb_goal:
              results.carbs,

            fat_goal:
              results.fats,

            onboarding_completed:
              true,
          });

      if (error) {

        toast.error(
          error.message
        );

        return;
      }

      toast.success(
        "Profile setup completed!"
      );

      navigate("/");
    };

  return (
    <div className="min-h-screen bg-[#090909] flex items-center justify-center p-6">

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="w-full max-w-[700px] bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl"
      >

        <h1 className="text-5xl font-bold text-white mb-4">
          Setup Your Profile
        </h1>

        <p className="text-gray-400 mb-10">
          Personalize your AI fitness experience
        </p>

        <div className="grid grid-cols-2 gap-5">

          <input
            name="full_name"
            placeholder="Full Name"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <input
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <input
            name="height"
            placeholder="Height (cm)"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <input
            name="weight"
            placeholder="Weight (kg)"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <input
            name="body_fat"
            placeholder="Body Fat %"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <input
            name="goal_weight"
            placeholder="Goal Weight"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <select
            name="gender"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          >

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

          </select>

          <select
            name="fitness_goal"
            onChange={handleChange}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white"
          >

            <option value="fat_loss">
              Fat Loss
            </option>

            <option value="maintenance">
              Maintenance
            </option>

            <option value="muscle_gain">
              Muscle Gain
            </option>

          </select>

        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-8 bg-gradient-to-r from-orange-500 to-red-500 py-5 rounded-2xl text-white font-semibold hover:scale-[1.02] transition-all"
        >
          Complete Setup
        </button>

      </motion.div>

    </div>
  );
}

export default Onboarding;