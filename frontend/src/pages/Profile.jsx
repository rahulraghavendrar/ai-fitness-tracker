import PageWrapper from "../components/ui/PageWrapper";

import Navbar from "../components/layout/Navbar";

import {
  useProfile,
} from "../hooks/useProfile";

import useNutritionSummary from "../hooks/useNutritionSummary";

function Profile() {

  const {
    profile,
    loading,
  } = useProfile();

  const {
    summary,
  } = useNutritionSummary();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <PageWrapper>

      <div className="min-h-screen bg-[#090909] text-white p-8">

        <Navbar title="Profile" />

        <div className="grid grid-cols-[350px_1fr] gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex flex-col items-center">

              <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500 mb-6" />

              <h2 className="text-3xl font-bold">
                {profile.full_name}
              </h2>

              <p className="text-gray-400 mt-2">
                Premium Member
              </p>

            </div>

            <div className="mt-10 space-y-5">

              <div>

                <p className="text-gray-400">
                  Goal
                </p>

                <h3 className="text-xl mt-2 capitalize">
                  {profile.fitness_goal.replace(
                    "_",
                    " "
                  )}
                </h3>

              </div>

              <div>

                <p className="text-gray-400">
                  Daily Calorie Goal
                </p>

                <h3 className="text-xl mt-2">
                  {profile.daily_calories} kcal
                </h3>

              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-semibold mb-8">
                Body Metrics
              </h2>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Height
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {profile.height} cm
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Weight
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {profile.weight} kg
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Body Fat
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {profile.body_fat}%
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Goal Weight
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {profile.goal_weight} kg
                  </h3>

                </div>

              </div>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-semibold mb-8">
                Nutrition Statistics
              </h2>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Calories Consumed
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {summary?.calories ?? 0}
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Meals Logged
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {summary?.meal_count ?? 0}
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Protein
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {summary?.protein ?? 0} g
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Carbohydrates
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {summary?.carbs ?? 0} g
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Fat
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {summary?.fat ?? 0} g
                  </h3>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <p className="text-gray-400">
                    Calorie Goal Completion
                  </p>

                  <h3 className="text-4xl font-bold mt-3">

                    {Math.min(
                      100,
                      Math.round(
                        ((summary?.calories ?? 0) /
                          profile.daily_calories) *
                          100
                      )
                    )}%

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </PageWrapper>
  );
}

export default Profile;