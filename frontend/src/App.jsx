import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* AUTH */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* ONBOARDING */}

      <Route
        path="/onboarding"
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        }
      />

      {/* DASHBOARD */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* WORKOUT */}

      <Route
        path="/workout"
        element={
          <ProtectedRoute>
            <Workout />
          </ProtectedRoute>
        }
      />

      {/* PROGRESS */}

      <Route
        path="/progress"
        element={
          <ProtectedRoute>
            <Progress />
          </ProtectedRoute>
        }
      />

      {/* PROFILE */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;