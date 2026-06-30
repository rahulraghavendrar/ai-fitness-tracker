import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getDailySummary,
  getTodayMeals,
  getWeeklySummary,
} from "../api/nutritionApi";

const NutritionContext =
  createContext();

export function NutritionProvider({

  children,

}) {

  const [

    summary,

    setSummary,

  ] = useState(null);

  const [

    todayMeals,

    setTodayMeals,

  ] = useState([]);

  const [

    weeklySummary,

    setWeeklySummary,

  ] = useState([]);

  const [

    loading,

    setLoading,

  ] = useState(true);

  const userId =
    "test-user";

  async function refreshNutrition() {

    try {

      setLoading(true);

      const [

        summaryData,

        mealsData,

        weeklyData,

      ] = await Promise.all([

        getDailySummary(
          userId
        ),

        getTodayMeals(
          userId
        ),

        getWeeklySummary(
          userId
        ),

      ]);

      setSummary(
        summaryData
      );

      setTodayMeals(
        mealsData
      );

      setWeeklySummary(
        weeklyData
      );

    } catch (error) {

      console.error(
        "Nutrition Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    refreshNutrition();

  }, []);

  useEffect(() => {

    function scheduleRefresh() {

      const now =
        new Date();

      const midnight =
        new Date();

      midnight.setHours(
        24,
        0,
        0,
        0
      );

      const milliseconds =

        midnight - now;

      const timer =

        setTimeout(

          async () => {

            await refreshNutrition();

            scheduleRefresh();

          },

          milliseconds

        );

      return timer;

    }

    const timer =
      scheduleRefresh();

    return () =>
      clearTimeout(
        timer
      );

  }, []);

  return (

    <NutritionContext.Provider

      value={{

        summary,

        todayMeals,

        weeklySummary,

        loading,

        refreshNutrition,

        userId,

      }}

    >

      {children}

    </NutritionContext.Provider>

  );

}

export function useNutrition() {

  return useContext(

    NutritionContext

  );

}