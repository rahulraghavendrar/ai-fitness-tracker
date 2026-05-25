function WorkoutCard() {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 shadow-2xl">

      <p className="text-white/80">
        Today's Workout
      </p>

      <h2 className="text-3xl font-bold mt-3">
        Push Day
      </h2>

      <p className="mt-4 text-white/80">
        Chest • Shoulders • Triceps
      </p>

      <button className="mt-6 bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition-all">
        Start Workout
      </button>

    </div>
  );
}

export default WorkoutCard;