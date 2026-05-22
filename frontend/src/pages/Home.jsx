import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import ChatWindow from "../components/chat/ChatWindow";
import StatsGrid from "../components/dashboard/StatsGrid";

function Home() {
  return (
    <div className="flex bg-[#090909] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <Topbar />

        <div className="grid grid-cols-[1fr_350px] gap-8">

          <ChatWindow />

          <div>

            <StatsGrid />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;