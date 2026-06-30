import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getDailySummary,
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
    loading,
    setLoading,
  ] = useState(true);

  const userId = "test-user";

  async function refreshNutrition() {

    try {

      setLoading(true);

      const data =
        await getDailySummary(
          userId
        );

      setSummary(data);

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

  return (

    <NutritionContext.Provider
      value={{
        summary,
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