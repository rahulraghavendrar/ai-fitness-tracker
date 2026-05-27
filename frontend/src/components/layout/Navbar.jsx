import {
  ArrowLeft,
  Home,
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

    <div className="flex justify-between items-start mb-10">

      {/* LEFT SIDE */}

      <div>

        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Personalized fitness dashboard
        </p>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-4">

        {/* HOME BUTTON */}

        <button
          onClick={() =>
            navigate("/")
          }
          className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all"
        >

          <Home size={20} />

        </button>

        {/* BACK BUTTON */}

        <button
          onClick={() =>
            navigate(-1)
          }
          className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all"
        >

          <ArrowLeft size={20} />

        </button>

        {/* LOGOUT BUTTON */}

        <button
          onClick={handleLogout}
          className="bg-red-500/20 text-red-400 border border-red-500/20 px-5 py-4 rounded-2xl hover:bg-red-500/30 transition-all flex items-center gap-3"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Navbar;