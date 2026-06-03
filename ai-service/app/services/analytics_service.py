from app.database.meal_logs import (
    supabase
)


def get_daily_summary(
    user_id
):

    response = (
        supabase
        .table("meal_logs")
        .select("*")
        .eq(
            "user_id",
            user_id
        )
        .execute()
    )

    meals = response.data

    total_calories = sum(
        meal["calories"]
        for meal in meals
    )

    total_protein = sum(
        meal["protein"]
        for meal in meals
    )

    total_carbs = sum(
        meal["carbs"]
        for meal in meals
    )

    total_fat = sum(
        meal["fat"]
        for meal in meals
    )

    return {

        "calories":
            total_calories,

        "protein":
            total_protein,

        "carbs":
            total_carbs,

        "fat":
            total_fat,

        "meal_count":
            len(meals)
    }