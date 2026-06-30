from app.database.meal_logs import (
    supabase
)

from app.services.time_service import (
    get_today_iso
)


def get_daily_summary(
    user_id
):

    start_date, end_date = (
        get_today_iso()
    )

    response = (

        supabase

        .table("meal_logs")

        .select("*")

        .eq(
            "user_id",
            user_id
        )

        .gte(
            "created_at",
            start_date
        )

        .lt(
            "created_at",
            end_date
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