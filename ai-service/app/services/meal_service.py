from app.database.meal_logs import (
    supabase
)


def save_meal(
    meal_data
):

    response = (
        supabase
        .table("meal_logs")
        .insert(meal_data)
        .execute()
    )

    return response