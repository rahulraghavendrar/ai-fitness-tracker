import PageWrapper from "../components/ui/PageWrapper";
import Navbar from "../components/layout/Navbar";

import {
  useProfile,
} from "../hooks/useProfile";

import useNutritionSummary from "../hooks/useNutritionSummary";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function CustomTooltip({
  active,
  payload,
}) {

  if (
    active &&
    payload &&
    payload.length
  ) {

    return (

      <div className="bg-[#111]/95 border border-orange-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-2xl">

        <p className="text-gray-400 text-sm mb-2">
          Current Weight
        </p>

        <p className="text-3xl font-bold text-orange-400">
          {payload[0].value} kg
        </p>

      </div>

    );

  }

  return null;

}

function Progress() {

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

  const calorieGoal =
    profile.daily_calories || 2200;

  const calorieProgress =
    Math.min(
      100,
      Math.round(
        ((summary?.calories || 0) /
          calorieGoal) * 100
      )
    );

  const data = [

    {
      week: "Week 1",
      weight:
        profile.weight + 4,
    },

    {
      week: "Week 2",
      weight:
        profile.weight + 2,
    },

    {
      week: "Week 3",
      weight:
        profile.weight + 1,
    },

    {
      week: "Current",
      weight:
        profile.weight,
    },

  ];

  return (

    <PageWrapper>

      <div className="min-h-screen bg-[#090909] text-white p-8">

        <Navbar title="Progress Analytics" />

        <div className="grid grid-cols-5 gap-5 mb-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Calories
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {summary?.calories ?? 0}
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Protein
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {summary?.protein ?? 0}g
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Carbs
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {summary?.carbs ?? 0}g
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Fat
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {summary?.fat ?? 0}g
            </h2>

          </div>

          <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-6">

            <p className="text-white/80">
              Goal
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {calorieProgress}%
            </h2>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-[450px] backdrop-blur-xl">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h2 className="text-3xl font-semibold">

                Weight Progress

              </h2>

              <p className="text-gray-400 mt-2">

                Monthly Body Weight

              </p>

            </div>

          </div>

          <ResponsiveContainer
            width="100%"
            height="85%"
          >

            <LineChart
              data={data}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
              />

              <XAxis
                dataKey="week"
              />

              <YAxis />

              <Tooltip
                content={<CustomTooltip />}
              />

              <Line
                type="monotone"
                dataKey="weight"
                stroke="#ff7b00"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </PageWrapper>

  );

}

export default Progress;