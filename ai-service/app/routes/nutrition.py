from fastapi import APIRouter

from app.services.nutrition_service import (
    search_food,
    analyze_meal,
)

from app.services.meal_service import (
    save_meal
)

from app.services.analytics_service import (
    get_daily_summary,
    get_weekly_summary,
)

from app.services.history_service import (
    get_today_meals,
)

from app.models.nutrition_models import (
    MealAnalysisRequest,
    LogMealRequest,
)

router = APIRouter()


@router.get("/health")
async def nutrition_health():

    return {
        "status": "Nutrition route working"
    }


@router.get("/search")
async def nutrition_search(food: str):

    result = search_food(food)

    if result is None:
        return {
            "message": "Food not found"
        }

    return result


@router.post("/analyze")
async def nutrition_analyze(
    request: MealAnalysisRequest
):

    result = analyze_meal(
        request.meal
    )

    if result is None:
        return {
            "message": "Food not found"
        }

    return result


@router.post("/log-meal")
async def log_meal(
    request: LogMealRequest
):

    result = analyze_meal(
        request.meal
    )

    if result is None:

        return {
            "message":
            "Food not found"
        }

    meal_data = {

        "user_id":
            request.user_id,

        "food_name":
            result["food_name"],

        "quantity":
            result["quantity"],

        "calories":
            result["total_calories"],

        "protein":
            result["protein"],

        "carbs":
            result["carbs"],

        "fat":
            result["fat"]

    }

    save_meal(
        meal_data
    )

    return {

        "message":
            "Meal logged successfully",

        "meal":
            meal_data

    }


@router.get("/daily-summary")
async def daily_summary(
    user_id: str
):

    return get_daily_summary(
        user_id
    )


@router.get("/weekly-summary")
async def weekly_summary(
    user_id: str
):

    return get_weekly_summary(
        user_id
    )


@router.get("/today-meals")
async def today_meals(
    user_id: str
):

    return get_today_meals(
        user_id
    )