import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";

import {
  AuthProvider,
} from "./context/AuthContext";

import {
  NutritionProvider,
} from "./context/NutritionContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <BrowserRouter>

      <AuthProvider>

        <NutritionProvider>

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          <App />

        </NutritionProvider>

      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>
);