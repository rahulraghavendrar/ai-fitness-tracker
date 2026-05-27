import PageWrapper from "../components/ui/PageWrapper";

import Navbar from "../components/layout/Navbar";

import {
  Flame,
  Dumbbell,
  Timer,
  Target,
} from "lucide-react";

import {
  useProfile,
} from "../hooks/useProfile";

function Workout() {

  const {
    profile,
    loading,
  } = useProfile();

  if (loading) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  const workouts = [

    {
      title: "Push Day",
      calories: 450,
      duration: "60 mins",
      focus: "Chest • Shoulders • Triceps",
    },

    {
      title: "Leg Day",
      calories: 620,
      duration: "75 mins",
      focus: "Quads • Hamstrings • Glutes",
    },

    {
      title: "HIIT Cardio",
      calories: 520,
      duration: "40 mins",
      focus: "Fat Burning • Conditioning",
    },

  ];

  return (
    <PageWrapper>

      <div className="min-h-screen bg-[#090909] text-white p-8">

        <Navbar title="Workout Planner" />

        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <p className="text-gray-400">
              Fitness Goal
            </p>

            <h2 className="text-4xl font-bold mt-4 capitalize">
              {profile.fitness_goal.replace(
                "_",
                " "
              )}
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <p className="text-gray-400">
              Daily Calories
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {profile.daily_calories}
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <p className="text-gray-400">
              Protein Goal
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {profile.protein_goal}g
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-6">

          {workouts.map((workout, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-[1.03] transition-all backdrop-blur-xl"
            >

              <div className="flex items-center gap-3 mb-5">

                <div className="bg-orange-500/20 p-3 rounded-2xl">

                  <Dumbbell />

                </div>

                <h2 className="text-2xl font-semibold">
                  {workout.title}
                </h2>

              </div>

              <div className="space-y-5 text-gray-300">

                <div className="flex items-center gap-3">

                  <Flame className="text-orange-400" />

                  {workout.calories} kcal burned

                </div>

                <div className="flex items-center gap-3">

                  <Timer className="text-blue-400" />

                  {workout.duration}

                </div>

                <div className="flex items-center gap-3">

                  <Target className="text-pink-400" />

                  {workout.focus}

                </div>

              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">

                Start Workout

              </button>

            </div>

          ))}

        </div>

      </div>

    </PageWrapper>
  );
}

export default Workout;