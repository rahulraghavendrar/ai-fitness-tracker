import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import toast from "react-hot-toast";

import {
  supabase,
} from "../lib/supabase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {

    setLoading(true);

    const {
      error,
    } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {

      toast.error(error.message);

      return;
    }

    toast.success(
      "Logged in successfully!"
    );

    navigate("/");
  };

  const handleSignup = async () => {

    setLoading(true);

    const {
      error,
    } =
      await supabase.auth.signUp({
        email,
        password,
      });

    setLoading(false);

    if (error) {

      toast.error(error.message);

      return;
    }

    toast.success(
      "Account created!"
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#090909] flex items-center justify-center p-6">

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="w-full max-w-[450px] bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl"
      >

        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-10">
          Login to continue your fitness journey
        </p>

        <div className="space-y-6">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-orange-500 transition-all"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-orange-500 transition-all"
          />

        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-orange-500 to-red-500 py-5 rounded-2xl text-white font-semibold hover:scale-[1.02] transition-all"
        >

          {loading
            ? "Loading..."
            : "Login"}

        </button>

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full mt-4 bg-white/10 py-5 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all"
        >

          Create Account

        </button>

      </motion.div>

    </div>
  );
}

export default Login;