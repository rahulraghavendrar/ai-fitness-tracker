import PageWrapper from "../components/ui/PageWrapper";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { week: "Week 1", weight: 82 },
  { week: "Week 2", weight: 81 },
  { week: "Week 3", weight: 80 },
  { week: "Week 4", weight: 78 },
];

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
  return (
    <PageWrapper>

      <div className="min-h-screen bg-[#090909] text-white p-8">

        <h1 className="text-5xl font-bold mb-3">
          Progress Analytics
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Track your transformation journey
        </p>

        <div className="grid grid-cols-3 gap-6 mb-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <p className="text-gray-400">
              Current Weight
            </p>

            <h2 className="text-5xl font-bold mt-4">
              78kg
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <p className="text-gray-400">
              Calories Burned
            </p>

            <h2 className="text-5xl font-bold mt-4">
              12,540
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <p className="text-gray-400">
              Workout Streak
            </p>

            <h2 className="text-5xl font-bold mt-4">
              18 Days
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
                Monthly body weight tracking
              </p>

            </div>

            <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl text-sm">
              Last 30 Days
            </div>

          </div>

          <ResponsiveContainer
            width="100%"
            height="85%"
          >

            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: -20,
                bottom: 10,
              }}
            >

              <defs>

                <linearGradient
                  id="weightGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >

                  <stop
                    offset="0%"
                    stopColor="#ff7b00"
                  />

                  <stop
                    offset="100%"
                    stopColor="#ff006e"
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
              />

              <XAxis
                dataKey="week"
                tick={{
                  fill: "#888",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: "#666",
                  fontSize: 13,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "#ff7b00",
                  strokeWidth: 1,
                }}
              />

              <Line
                type="monotone"
                dataKey="weight"
                stroke="url(#weightGradient)"
                strokeWidth={5}
                dot={{
                  r: 6,
                  strokeWidth: 3,
                  fill: "#090909",
                  stroke: "#ff7b00",
                }}
                activeDot={{
                  r: 9,
                  fill: "#ff7b00",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </PageWrapper>
  );
}

export default Progress;