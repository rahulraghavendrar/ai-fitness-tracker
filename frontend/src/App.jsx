import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/workout"
        element={<Workout />}
      />

      <Route
        path="/progress"
        element={<Progress />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  );
}

export default App;