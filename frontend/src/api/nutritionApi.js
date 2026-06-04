import axios from "axios";

const API_BASE =
  "http://127.0.0.1:8000";

export const getDailySummary = async (
  userId
) => {

  const response =
    await axios.get(
      `${API_BASE}/nutrition/daily-summary`,
      {
        params: {
          user_id: userId,
        },
      }
    );

  return response.data;
};

export const searchFood = async (
  food
) => {

  const response =
    await axios.get(
      `${API_BASE}/nutrition/search`,
      {
        params: {
          food,
        },
      }
    );

  return response.data;
};

export const analyzeMeal = async (
  meal
) => {

  const response =
    await axios.post(
      `${API_BASE}/nutrition/analyze`,
      {
        meal,
      }
    );

  return response.data;
};

export const logMeal = async (
  userId,
  meal
) => {

  const response =
    await axios.post(
      `${API_BASE}/nutrition/log-meal`,
      {
        user_id: userId,
        meal,
      }
    );

  return response.data;
};