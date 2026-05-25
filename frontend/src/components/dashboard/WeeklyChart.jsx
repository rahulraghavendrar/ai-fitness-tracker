import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calories: 1800 },
  { day: "Tue", calories: 2100 },
  { day: "Wed", calories: 1900 },
  { day: "Thu", calories: 2300 },
  { day: "Fri", calories: 2000 },
  { day: "Sat", calories: 1700 },
  { day: "Sun", calories: 2200 },
];

function WeeklyChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        Weekly Calories
      </h2>

      <div className="h-[250px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <XAxis dataKey="day" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calories"
              stroke="#ff7b00"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeeklyChart;