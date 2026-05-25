import { motion } from "framer-motion";

function ProgressRing() {

  const progress = 58;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center">

      <div className="relative w-[180px] h-[180px]">

        <svg
          className="rotate-[-90deg]"
          width="180"
          height="180"
        >

          <circle
            cx="90"
            cy="90"
            r="70"
            stroke="#222"
            strokeWidth="14"
            fill="transparent"
          />

          <motion.circle
            cx="90"
            cy="90"
            r="70"
            stroke="url(#gradient)"
            strokeWidth="14"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={440}
            initial={{
              strokeDashoffset: 440,
            }}
            animate={{
              strokeDashoffset:
                440 - (440 * progress) / 100,
            }}
            transition={{
              duration: 1.5,
            }}
          />

          <defs>
            <linearGradient id="gradient">
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

        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h2 className="text-4xl font-bold">
            {progress}%
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Goal
          </p>

        </div>

      </div>

      <p className="mt-6 text-lg font-medium">
        Daily Calorie Progress
      </p>

    </div>
  );
}

export default ProgressRing;