from collections import defaultdict
from datetime import timedelta

from app.database.meal_logs import (
    supabase
)

from app.services.time_service import (
    get_today_iso,
    get_ist_now
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


def get_weekly_summary(
    user_id
):

    today = get_ist_now().date()

    start_day = today - timedelta(days=6)

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
            start_day.isoformat()
        )

        .execute()

    )

    meals = response.data

    weekly = defaultdict(
        lambda: {
            "calories": 0,
            "protein": 0,
            "carbs": 0,
            "fat": 0
        }
    )

    for meal in meals:

        day = meal["created_at"][:10]

        weekly[day]["calories"] += meal["calories"]
        weekly[day]["protein"] += meal["protein"]
        weekly[day]["carbs"] += meal["carbs"]
        weekly[day]["fat"] += meal["fat"]

    result = []

    for i in range(7):

        current_day = (
            start_day + timedelta(days=i)
        )

        key = current_day.isoformat()

        values = weekly[key]

        result.append({

            "day":
                current_day.strftime("%a"),

            "calories":
                round(values["calories"], 2),

            "protein":
                round(values["protein"], 2),

            "carbs":
                round(values["carbs"], 2),

            "fat":
                round(values["fat"], 2)

        })

    return result