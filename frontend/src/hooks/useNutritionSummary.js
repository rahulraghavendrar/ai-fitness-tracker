import {
  useEffect,
  useState,
} from "react";

import {
  getDailySummary,
} from "../api/nutritionApi";

export default function useNutritionSummary() {

  const [
    summary,
    setSummary,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function fetchData() {

      try {

        const data =
          await getDailySummary(
            "test-user"
          );

        setSummary(
          data
        );

      } catch (error) {

        console.error(
          error
        );

      } finally {

        setLoading(
          false
        );

      }
    }

    fetchData();

  }, []);

  return {
    summary,
    loading,
  };
}