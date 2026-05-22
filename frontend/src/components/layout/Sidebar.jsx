import {
  Dumbbell,
  BarChart3,
  User,
  Home,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

import { motion } from "framer-motion";

const items = [
  {
    icon: Home,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: Dumbbell,
    label: "Workout",
    path: "/workout",
  },
  {
    icon: BarChart3,
    label: "Progress",
    path: "/progress",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
];

function Sidebar() {
  return (
    <motion.div
      initial={{
        x: -40,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      className="w-[110px] border-r border-white/10 min-h-screen flex flex-col items-center py-8 gap-8 bg-black/20 backdrop-blur-xl"
    >

      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-2 transition-all ${
                isActive
                  ? "text-orange-400"
                  : "text-white"
              }`
            }
          >

            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="bg-white/5 hover:bg-white/10 transition-all p-4 rounded-2xl"
            >

              <Icon size={24} />

            </motion.div>

            <p className="text-xs">
              {item.label}
            </p>

          </NavLink>
        );
      })}

    </motion.div>
  );
}

export default Sidebar;