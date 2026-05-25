import ProgressRing from "./ProgressRing";
import WeeklyChart from "./WeeklyChart";
import WorkoutCard from "./WorkoutCard";
import HydrationCard from "./HydrationCard";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">

      <ProgressRing />

      <WorkoutCard />

      <div className="col-span-2">
        <WeeklyChart />
      </div>

      <HydrationCard />

    </div>
  );
}

export default DashboardGrid;