import {
  ArrowLeft,
  LogOut,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  supabase,
} from "../../lib/supabase";

function Navbar({
  title,
}) {

  const navigate =
    useNavigate();

  const handleLogout =
    async () => {

      await supabase.auth.signOut();

      navigate("/login");
    };

  return (
    <div className="flex justify-between items-center mb-10">

      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            navigate(-1)
          }
          className="bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-all"
        >

          <ArrowLeft />

        </button>

        <div>

          <h1 className="text-4xl font-bold">
            {title}
          </h1>

          <p className="text-gray-400 mt-1">
            Personalized fitness dashboard
          </p>

        </div>

      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500/20 text-red-400 border border-red-500/20 px-5 py-3 rounded-2xl hover:bg-red-500/30 transition-all flex items-center gap-3"
      >

        <LogOut size={18} />

        Logout

      </button>

    </div>
  );
}

export default Navbar;