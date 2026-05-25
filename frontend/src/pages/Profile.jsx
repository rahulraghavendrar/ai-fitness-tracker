import PageWrapper from "../components/ui/PageWrapper";

function Profile() {
  return (
    <PageWrapper>

      <div className="min-h-screen bg-[#090909] text-white p-8">

        <h1 className="text-5xl font-bold mb-10">
          Profile
        </h1>

        <div className="grid grid-cols-[350px_1fr] gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex flex-col items-center">

              <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500 mb-6" />

              <h2 className="text-3xl font-bold">
                Rahul
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

                <h3 className="text-xl mt-2">
                  Fat Loss
                </h3>
              </div>

              <div>
                <p className="text-gray-400">
                  Daily Calories
                </p>

                <h3 className="text-xl mt-2">
                  2200 kcal
                </h3>
              </div>

              <div>
                <p className="text-gray-400">
                  Workout Split
                </p>

                <h3 className="text-xl mt-2">
                  Push Pull Legs
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
                    178 cm
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-6">
                  <p className="text-gray-400">
                    Weight
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    78 kg
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-6">
                  <p className="text-gray-400">
                    Body Fat
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    18%
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-6">
                  <p className="text-gray-400">
                    BMI
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    24.6
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