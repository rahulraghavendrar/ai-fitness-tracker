from app.database.meal_logs import (
    supabase
)

from app.services.time_service import (
    get_today_iso
)


def get_today_meals(
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

        .order(
            "created_at",
            desc=True
        )

        .execute()

    )

    meals = response.data

    history = []

    for meal in meals:

        history.append({

            "food_name":
                meal["food_name"],

            "quantity":
                meal["quantity"],

            "calories":
                meal["calories"],

            "protein":
                meal["protein"],

            "carbs":
                meal["carbs"],

            "fat":
                meal["fat"],

            "created_at":
                meal["created_at"]

        })

    return history