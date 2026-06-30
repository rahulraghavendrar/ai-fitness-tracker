import {
  useEffect,
  useState,
} from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  getWeeklySummary,
} from "../../api/nutritionApi";

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
          Calories
        </p>

        <p className="text-2xl font-bold text-orange-400">
          {payload[0].value} kcal
        </p>

      </div>

    );
  }

  return null;
}

function WeeklyChart() {

  const [
    data,
    setData,
  ] = useState([]);

  useEffect(() => {

    async function loadChart() {

      try {

        const result =
          await getWeeklySummary(
            "test-user"
          );

        setData(
          result
        );

      } catch (error) {

        console.error(
          error
        );

      }

    }

    loadChart();

  }, []);

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-semibold">
            Weekly Calories
          </h2>

          <p className="text-gray-400 mt-2">
            Daily calorie consumption
          </p>

        </div>

        <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl text-sm">
          Last 7 Days
        </div>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="lineGradient"
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
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#888",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#666",
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Line
              type="monotone"
              dataKey="calories"
              stroke="url(#lineGradient)"
              strokeWidth={4}
              dot={{
                r: 6,
                strokeWidth: 3,
                fill: "#090909",
                stroke: "#ff7b00",
              }}
              activeDot={{
                r: 8,
                fill: "#ff7b00",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default WeeklyChart;