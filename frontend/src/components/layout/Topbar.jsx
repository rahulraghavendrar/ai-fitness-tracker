import { motion } from "framer-motion";

function Topbar() {
  return (
    <motion.div
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="flex justify-between items-center mb-8"
    >

      <div>
        <h1 className="text-5xl font-bold tracking-tight">
          AI Fitness Tracker
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Your intelligent health assistant
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-[1px] rounded-3xl shadow-2xl">

        <div className="bg-[#111] rounded-3xl p-6 w-[300px]">

          <p className="text-gray-400">
            Today's Calories
          </p>

          <h2 className="text-6xl font-bold mt-3">
            1270
          </h2>

          <p className="text-gray-400 mt-3">
            Goal: 2200 kcal
          </p>

          <div className="mt-5">

            <div className="flex justify-between mb-2 text-sm">
              <span>Progress</span>
              <span>58%</span>
            </div>

            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "58%",
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
              />

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default Topbar;