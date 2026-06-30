import ProgressRing from "./ProgressRing";
import WeeklyChart from "./WeeklyChart";
import WorkoutCard from "./WorkoutCard";
import HydrationCard from "./HydrationCard";

import NutritionSummaryCard from "./NutritionSummaryCard";
import MealHistoryCard from "./MealHistoryCard";

function DashboardGrid() {

  return (

    <div
      className="
      grid
      grid-cols-2
      gap-6
      mt-8
    "
    >

      <ProgressRing />

      <WorkoutCard />

      <NutritionSummaryCard />

      <HydrationCard />

      <div className="col-span-2">

        <WeeklyChart />

      </div>

      <div className="col-span-2">

        <MealHistoryCard />

      </div>

    </div>

  );

}

export default DashboardGrid;