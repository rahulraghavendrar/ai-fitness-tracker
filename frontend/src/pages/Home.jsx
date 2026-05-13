import {
  FaFire,
  FaDumbbell,
  FaBed,
  FaTint,
  FaWalking,
  FaPlus,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Home() {
  const meals = [
    {
      name: "Breakfast",
      calories: 420,
    },
    {
      name: "Lunch",
      calories: 650,
    },
    {
      name: "Snacks",
      calories: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <div className="flex justify-between items-center px-8 py-6 border-b border-gray-800">

        <div>
          <h1 className="text-3xl font-bold">
            AI Fitness Tracker
          </h1>

          <p className="text-gray-400 mt-1">
            Smart calorie + workout assistant
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-4 rounded-2xl w-[260px]">

          <div className="flex justify-between mb-2">
            <p className="text-gray-400">
              Today's Calories
            </p>

            <FaFire className="text-orange-500" />
          </div>

          <h2 className="text-4xl font-bold">
            1270
          </h2>

          <p className="text-gray-400 mt-2">
            Goal: 2200 kcal
          </p>

        </div>

      </div>

      <div className="flex">

        <div className="w-[120px] border-r border-gray-800 min-h-screen p-4">

          <div className="space-y-6">

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1a1a1a] p-4 rounded-full">
                <FaDumbbell size={20} />
              </div>

              <p className="text-sm">
                Workout
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1a1a1a] p-4 rounded-full">
                <FaWalking size={20} />
              </div>

              <p className="text-sm">
                Steps
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1a1a1a] p-4 rounded-full">
                <FaBed size={20} />
              </div>

              <p className="text-sm">
                Sleep
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1a1a1a] p-4 rounded-full">
                <FaTint size={20} />
              </div>

              <p className="text-sm">
                Water
              </p>
            </div>

            <button className="bg-white text-black p-4 rounded-full w-full flex items-center justify-center">
              <FaPlus />
            </button>

          </div>
        </div>

        <div className="flex-1 p-8">

          <div className="max-w-4xl mx-auto">

            <div className="bg-[#1a1a1a] rounded-3xl p-6 h-[550px] overflow-y-auto">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >

                <div className="bg-[#2a2a2a] p-4 rounded-2xl w-fit max-w-[70%]">
                  <p>
                    Welcome back Rahul 👋
                  </p>

                  <p className="mt-2 text-gray-300">
                    What would you like to track today?
                  </p>
                </div>

              </motion.div>

              <div className="grid grid-cols-2 gap-4 mb-8">

                <button className="bg-[#2a2a2a] hover:bg-[#333] transition p-4 rounded-2xl text-left">
                  🍳 Track Breakfast
                </button>

                <button className="bg-[#2a2a2a] hover:bg-[#333] transition p-4 rounded-2xl text-left">
                  🍛 Track Lunch
                </button>

                <button className="bg-[#2a2a2a] hover:bg-[#333] transition p-4 rounded-2xl text-left">
                  🍪 Track Snacks
                </button>

                <button className="bg-[#2a2a2a] hover:bg-[#333] transition p-4 rounded-2xl text-left">
                  🍽 Track Dinner
                </button>

              </div>

              <div>

                <h3 className="text-xl font-semibold mb-4">
                  Today's Meals
                </h3>

                <div className="space-y-4">

                  {meals.map((meal, index) => (
                    <div
                      key={index}
                      className="bg-[#2a2a2a] p-4 rounded-2xl flex justify-between items-center"
                    >

                      <div>
                        <p className="font-medium">
                          {meal.name}
                        </p>

                        <p className="text-sm text-gray-400">
                          Logged successfully
                        </p>
                      </div>

                      <p className="text-orange-400 font-bold">
                        {meal.calories} kcal
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            <div className="mt-6 flex gap-4">

              <input
                type="text"
                placeholder="Track your meal..."
                className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-2xl px-6 py-4 text-white outline-none"
              />

              <button className="bg-white text-black px-8 rounded-2xl font-semibold hover:bg-gray-200 transition">
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;