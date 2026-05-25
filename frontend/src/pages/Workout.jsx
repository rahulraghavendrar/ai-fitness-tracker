import PageWrapper from "../components/ui/PageWrapper";

import {
  Flame,
  Dumbbell,
  Timer,
} from "lucide-react";

function Workout() {

  const workouts = [
    {
      title: "Push Day",
      calories: 450,
      duration: "60 mins",
    },
    {
      title: "Leg Day",
      calories: 620,
      duration: "75 mins",
    },
    {
      title: "HIIT Cardio",
      calories: 520,
      duration: "40 mins",
    },
  ];

  return (
    <PageWrapper>

      <div className="min-h-screen bg-[#090909] text-white p-8">

        <h1 className="text-5xl font-bold mb-3">
          Workout Planner
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          AI-powered workout recommendations
        </p>

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

              <div className="space-y-4 text-gray-300">

                <div className="flex items-center gap-3">
                  <Flame className="text-orange-400" />
                  {workout.calories} kcal burned
                </div>

                <div className="flex items-center gap-3">
                  <Timer className="text-blue-400" />
                  {workout.duration}
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